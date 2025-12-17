export type Project = {
  id: string;
  title: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "spectre-tokens",
    title: "SPECTRE TOKENS",
    href: "https://github.com/phcdevworks/spectre-tokens",
    description:
      "Core design primitives for the Spectre suite. Colors, spacing, typography, radii, shadows. Outputs to CSS variables, JS/TS objects, and theme presets for WordPress, Astro, 11ty.",
  },
  {
    id: "spectre-ui",
    title: "SPECTRE UI",
    href: "https://github.com/phcdevworks/spectre-ui",
    description:
      "Cross-platform UI built on Spectre Tokens. Tailwind-powered design system delivering consistent CSS utilities, component classes, and design recipes for WordPress, Astro, 11ty.",
  },
  {
    id: "spectre-ui-astro",
    title: "SPECTRE UI ASTRO",
    href: "https://github.com/phcdevworks/spectre-ui-astro",
    description:
      "First-class Astro layer for Spectre UI. Typed, SSR-friendly components (Button, Card, Input) that wrap Spectre UI classes and tokens. Native Astro, zero bloat.",
  },
  {
    id: "spectre-icons",
    title: "SPECTRE ICONS",
    href: "https://github.com/phcdevworks/spectre-icons",
    description:
      "Modern SVG icon sets for WordPress builders. Lucide, Font Awesome, and more. Unified manager, performance-first. Replaces dozens of separate icon plugins.",
  },
];
