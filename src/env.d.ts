/// <reference types="astro/client" />

declare module "*.svg?react" {
  const ReactComponent: import("react").FC<
    import("react").SVGProps<SVGSVGElement>
  >;
  export default ReactComponent;
}
