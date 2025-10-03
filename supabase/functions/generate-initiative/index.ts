/**
 * Supabase Edge Function: Generate Initiative Data
 * Handles Groq API calls with rate limiting
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Parse request body
    const { prompt, model, ipAddress, userAgent } = await req.json()

    // Validate input
    if (!prompt || !model) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: prompt, model' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Check rate limit
    const today = new Date().toISOString().split('T')[0]
    const { data: rateLimitData, error: rateLimitError } = await supabaseClient
      .from('rate_limits')
      .select('*')
      .eq('ip_address', ipAddress)
      .gte('created_at', `${today}T00:00:00.000Z`)
      .single()

    if (rateLimitError && rateLimitError.code !== 'PGRST116') {
      console.error('Rate limit check error:', rateLimitError)
      return new Response(
        JSON.stringify({ error: 'Rate limit check failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const requestsUsed = rateLimitData?.requests_count || 0
    const maxRequests = 30 // Per day

    if (requestsUsed >= maxRequests) {
      return new Response(
        JSON.stringify({ error: 'Daily rate limit exceeded' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Call Groq API
    const groqApiKey = Deno.env.get('GROQ_API_KEY')
    if (!groqApiKey) {
      return new Response(
        JSON.stringify({ error: 'Groq API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const systemPrompt = `Greetings, fellow adventurer! 🎲✨ I'm your whimsical D&D assistant, here to help you populate your initiative tracker with all sorts of marvelous creatures and characters!

I absolutely love bringing D&D encounters to life, and I'll make sure each creature I generate has just the right stats to make your combat both challenging and fun. Here's how I work my magic:

🌟 My Guidelines (with a sprinkle of fairy dust):
- I ALWAYS use official D&D 5e monster stats when applicable (because consistency is magical and players expect it!)
- For custom creatures, I base stats on similar official monsters and adjust appropriately
- For player characters, I craft reasonable stats that match their level and class
- Initiative rolls are realistic (usually 1-25, because even dragons can have off days)
- HP matches the creature type and CR/level (no cheating with inflated numbers!)
- AC is appropriate for the creature (armor is important, you know!)
- Speed is in feet (usually 25-40 for most creatures, though some are surprisingly spry)
- I add helpful notes about special abilities and tactics (because every creature has their own personality!)
- When in doubt, I default to official D&D 5e sources like the Monster Manual, Volo's Guide, Mordenkainen's Tome, etc.

CRITICAL: You MUST return a JSON object with this EXACT structure:
{
  "creatures": [
    {
      "name": "Creature Name",
      "initiative": 15,
      "hp": 25,
      "maxHp": 25,
      "ac": 16,
      "speed": 30,
      "notes": "Special abilities or tactics",
      "actions": [
        {
          "name": "Action Name",
          "description": "Full action description with attack bonus, damage, and effects"
        }
      ]
    }
  ],
  "explanation": "Brief explanation of what was generated"
}

The "creatures" array is REQUIRED and must contain at least one creature object.
All numeric fields (initiative, hp, maxHp, ac, speed) should be numbers, not strings.
The "actions" array should include the creature's main combat actions with full D&D 5e formatting.
Do not include any text outside the JSON object.`

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: `${prompt}

Remember: Return ONLY a JSON object with the "creatures" array. Here's an example:
{
  "creatures": [
    {
      "name": "Goblin",
      "initiative": 12,
      "hp": 7,
      "maxHp": 7,
      "ac": 15,
      "speed": 30,
      "notes": "Nimble Escape ability"
    }
  ],
  "explanation": "Created a basic goblin"
}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    })

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text()
      console.error('Groq API error:', errorText)
      return new Response(
        JSON.stringify({ error: `Groq API error: ${groqResponse.status}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const groqData = await groqResponse.json()
    const content = groqData.choices[0]?.message?.content

    if (!content) {
      return new Response(
        JSON.stringify({ error: 'No response from Groq' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse and validate response
    let cleanContent = content.trim()
    if (cleanContent.startsWith('```json')) {
      cleanContent = cleanContent
        .replace(/```json\n?/, '')
        .replace(/\n?```$/, '')
    }
    if (cleanContent.startsWith('```')) {
      cleanContent = cleanContent.replace(/```\n?/, '').replace(/\n?```$/, '')
    }

    const jsonResponse = JSON.parse(cleanContent)

    // Update rate limit
    const { error: updateError } = await supabaseClient
      .from('rate_limits')
      .upsert({
        ip_address: ipAddress,
        user_agent: userAgent,
        requests_count: requestsUsed + 1,
        last_request_at: new Date().toISOString(),
        created_at: `${today}T00:00:00.000Z`
      }, {
        onConflict: 'ip_address,created_at',
        ignoreDuplicates: false
      })

    if (updateError) {
      console.error('Rate limit update error:', updateError)
    }

    // Log the request
    const { error: logError } = await supabaseClient
      .from('request_logs')
      .insert({
        ip_address: ipAddress,
        user_agent: userAgent,
        prompt: prompt.substring(0, 500),
        model: model,
        tokens_used: groqData.usage?.total_tokens || 0,
        response_time_ms: Date.now(),
        created_at: new Date().toISOString()
      })

    if (logError) {
      console.error('Request log error:', logError)
    }

    return new Response(
      JSON.stringify(jsonResponse),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})