---
name: dnd-55e-combat
description: D&D 5.5e (2024) combat rules. Use when working on the initiative tracker, implementing combat flow, turn order, or any feature that depends on how 5.5e combat works (initiative, rounds, turns, surprise, actions).
---

# D&D 5.5e (2024) Combat Basics

Reference for building and refining the initiative tracker. Combat in the 2024 core rules is organized into **rounds** and **turns**; initiative fixes turn order for the whole encounter.

## Combat flow

1. **Roll initiative** — When combat starts, every participant rolls a **Dexterity check** (d20 + Dex modifier). The GM rolls for monsters; identical creatures share one roll.
2. **Establish positions** — The GM sets where everyone is (marching order, room position, etc.).
3. **Take turns** — Each participant acts in **initiative order** (highest to lowest). When everyone has had a turn, the **round** ends. Repeat until combat ends.

A **round** is about 6 seconds in-world. **Initiative order does not change** round to round.

## Initiative

- **Initiative count** = the Dexterity check total; this is each combatant’s “initiative” for ordering.
- **Order** = rank combatants from **highest to lowest** initiative. Same order every round.
- **Ties:** GM decides order among tied monsters; players decide among tied PCs; GM decides PC vs. monster ties.
- **Surprise (5.5e change):** A surprised combatant has **Disadvantage** on the initiative roll. They still act on their turn; they are no longer skipped for the round.

## On a turn

On your turn you can:

- **Move** — Up to your Speed (in any combination with your action; movement can be split before/after action or bonus action).
- **Take one action** — Attack, Cast a Spell, Dash, Disengage, Dodge, Hide, Ready, Search, Utilize, Influence, or others from the rules.
- **One bonus action** — Only if a feature or spell grants it (e.g. two-weapon fighting, certain spells).
- **One reaction per round** — Used when a trigger occurs (e.g. opportunity attack when a creature leaves your reach). Reaction resets at the start of your next turn.

You can **do nothing** on your turn (e.g. Dodge or Ready if unsure).

## Other rules relevant to the tracker

- **Controlled mount:** When you mount a controlled mount, its initiative **changes to match yours**; it moves and acts on your turn (limited actions: Dash, Disengage, Dodge).
- **Combat end:** When one side is defeated (killed, unconscious, surrendered, or fled), or both sides stop fighting.

## For the initiative tracker

- Display and advance by **initiative count** (high to low).
- Support **round** tracking (new round after the lowest initiative has acted).
- Optionally support **surprise** (e.g. mark creatures with disadvantage on initiative, or a “surprised” flag without changing that they still get a turn).
- Turn = one participant’s move + action (+ optional bonus action); reactions are off-turn and don’t change initiative order.

When adding combat-related features (e.g. round counter, “current turn” highlight, surprise), follow these rules so the tool stays aligned with 5.5e.
