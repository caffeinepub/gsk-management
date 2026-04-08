# Design Brief: GSK Management

## Purpose
Premium showcase website for GSK Management, presenting entertainment, travel, and event management services to high-profile clients seeking sophisticated, integrated solutions.

## Tone & Aesthetic
Modern luxury with editorial elegance. Warm gold accents on deep navy foundation signal premium hospitality/entertainment expertise. Clean, uncluttered presentation with generous breathing room and high-quality imagery integration.

## Differentiation
Event/entertainment industry visual language through serif typography paired with refined sans-serif. Editorial grid layouts position GSK as a curated, high-touch service provider. Warm accent color in CTAs creates inviting touchpoints without overwhelming the refined palette.

## Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | 0.25 0.15 260 (Navy) | 0.72 0.18 40 (Gold) | Headers, primary content, brand foundation |
| Accent | 0.65 0.18 40 (Warm Gold) | 0.72 0.18 40 (Gold) | CTAs, highlights, interactive elements |
| Secondary | 0.97 0.02 100 (Cream) | 0.2 0.03 260 (Dark Navy) | Backgrounds, supporting surfaces |
| Muted | 0.92 0.01 100 (Off-White) | 0.2 0.03 260 | Secondary backgrounds, dividers |
| Foreground | 0.25 0.15 260 (Navy) | 0.96 0.02 100 (Off-White) | Body text, primary content |
| Destructive | 0.55 0.22 25 (Warm Red) | 0.65 0.19 22 | Error/alert states |

## Typography

| Layer | Font | Usage | Weight/Style |
|-------|------|-------|--------------|
| Display | Fraunces (Serif) | Event titles, hero headlines, section heads | 700 (bold), 400 (regular) |
| Body | DM Sans (Sans-Serif) | Description text, event details, body copy | 400 regular, 500 semi-bold |
| Mono | Geist Mono | Code snippets, technical details if needed | 400 |

## Structural Zones

| Zone | Background | Treatment | Purpose |
|------|------------|-----------|---------|
| Header/Nav | Primary (Navy) | Fixed, elevated, gold accent on active links | Persistent navigation, brand presence |
| Hero | Image + Gradient | Full-width, 60vh, centered text overlay, gold accent CTA | Immediate visual impact, service introduction |
| Service Section (odd) | Card (Cream) | Bordered, alternating layout, image + text grid | Service showcase with breathing room |
| Service Section (even) | Muted (Off-White) | Subtle background, no border, image right/left alternate | Visual rhythm and separation |
| Feature Cards | Card (Cream) | Elevated shadows, hover scale, image top | Portfolio/testimonial presentation |
| Footer | Primary (Navy) | Gold accent on links, email/social focus | Brand closure, contact bridge |

## Spacing & Rhythm
- Generous 48px section gutters between major sections
- 16px/24px padding within cards
- 12px vertical rhythm between text elements
- Mobile: 24px horizontal padding, 32px vertical gaps

## Component Patterns
- **CTA Buttons**: Accent background (gold), navy text, rounded 8px, hover shadow lift
- **Cards**: Cream background, subtle border, 8px radius, hover scale 1.02 + shadow increase
- **Event Cards**: Image 60% height, dark overlay gradient, white text overlay
- **Testimonial Cards**: Muted background, serif quote, navy author name, small accent underline

## Motion & Interaction
- Smooth transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Card hover: scale 1.02 + shadow-lg (350ms)
- Link hover: text opacity 0.8, underline accent color
- Page load: staggered fade-in for section cards (150ms offset)
- Scroll: subtle parallax on hero image (20px offset)

## Constraints
- No gradients on text (read: serif headings stay solid navy/cream)
- Max 3 accent color uses per page section (discipline)
- Image quality prioritized — all hero and portfolio images 1200px+ width
- Dark mode: warm gold primary maintains emotional warmth; backgrounds stay near-black (0.12–0.2 L) for AMOLED efficiency

## Signature Detail
Gold accent underline on featured event titles and primary CTAs — a subtle luxury signal that ties typography and color system together.
