# Travel Abroad brand kit

A starter identity for an early-stage product. Use this as a working direction and refine it as the team learns from students and program staff.

## Brand foundation

**Purpose:** Help students feel informed, connected, and supported as they explore the world.

**Personality:** Welcoming, curious, dependable, and optimistic.

**Brand promise:** Make the practical parts of studying abroad easier to navigate, so students can focus on the experience.

**Suggested tagline:** Explore confidently, together.

## Color palette

The palette combines a dependable ocean blue with warm, optimistic accents and quiet neutrals. Blue provides a stable foundation for a product that handles important program and travel information; teal and coral bring a sense of exploration and human connection.

| Color | Hex | Role |
| --- | --- | --- |
| Ocean | `#123B5D` | Primary brand color; headings, navigation, and primary buttons |
| Deep ocean | `#0A263C` | High-contrast text and dark backgrounds |
| Lagoon | `#087F8C` | Secondary actions, links on light backgrounds, and accents |
| Sunset | `#D65B45` | Sparing highlights and moments of energy |
| Sand | `#F4E9D8` | Warm section backgrounds and illustrations |
| Cloud | `#F8FAFC` | Main page background |
| White | `#FFFFFF` | Cards and surfaces |
| Slate | `#465563` | Supporting text and secondary information |

### Usage

- Build most screens from cloud, white, ocean, and deep ocean. Use sand to distinguish sections without adding visual noise.
- Use lagoon for secondary emphasis and sunset sparingly for highlights. Reserve red-toned system colors for errors where needed so decorative accents do not imply danger.
- Use white text on ocean for primary buttons and deep ocean or slate text on white or cloud for readable content.
- Do not use sunset or lagoon as small text on white without checking contrast for the specific combination. Check all text, control states, and focus indicators against the applicable accessibility standards during implementation.
- Do not communicate status by color alone; pair colors with text and an icon or other clear indicator.

### Starter CSS

```css
:root {
  --color-ocean: #123b5d;
  --color-deep-ocean: #0a263c;
  --color-lagoon: #087f8c;
  --color-sunset: #d65b45;
  --color-sand: #f4e9d8;
  --color-cloud: #f8fafc;
  --color-white: #ffffff;
  --color-slate: #465563;

  --color-background: var(--color-cloud);
  --color-surface: var(--color-white);
  --color-text: var(--color-deep-ocean);
  --color-text-muted: var(--color-slate);
  --color-primary: var(--color-ocean);
  --color-primary-text: var(--color-white);
}
```

## Typography

- **Headings:** [Manrope](https://fonts.google.com/specimen/Manrope), bold or semibold. Its open, modern shapes feel friendly and confident.
- **Body and interface:** [Inter](https://fonts.google.com/specimen/Inter), regular or medium. It is designed for clear reading in interfaces.
- **Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

Keep headings concise, body copy easy to scan, and interface labels explicit. Avoid relying on all caps for long labels or paragraphs.

## Logo direction

Start with a simple wordmark, **Travel Abroad**, in ocean on a light background or white on ocean. A future symbol could combine a route or waypoint with a subtle horizon to suggest both guidance and discovery. Keep any icon recognizable at small sizes and avoid detailed illustrations inside the logo.

This is a direction for exploration, not a finished logo.

## Imagery and visual style

- Show real student experiences, varied destinations, and everyday moments of connection.
- Represent a range of people and abilities; avoid treating any culture as a generic backdrop.
- Favor natural light, candid compositions, and useful context over heavily staged travel imagery.
- Use simple route lines, maps, and rounded shapes as supporting graphics without obscuring important information.
- Keep layouts spacious and use consistent cards, spacing, and modest corner rounding.

## Voice and tone

Write like a well-informed, encouraging travel companion: clear, warm, and practical. Use plain language and say what someone can do next. Be especially direct and calm for safety messages.

| Instead of | Try |
| --- | --- |
| “Submit your itinerary data.” | “Share your trip plans.” |
| “Noncompliance with requirements may result in…” | “Complete these steps before you leave.” |
| “An emergency event has been detected.” | “A weather alert may affect your trip. Check the details.” |

Avoid promising safety or implying that the service can always locate or protect a student. Explain what information is shared and who can see it when the product collects travel or identity details.

## Next steps

Validate this direction with students and program staff, create a logo and interface examples, and test the palette across actual components and accessibility states. Product names, features, and implementation details remain subject to change.
