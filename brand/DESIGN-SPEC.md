# Option A design specification

Status: Lucky selected Option A linework and the balanced earth gradient on 2026-11-14. This is a working icon direction, not approval of an app name, complete identity, or production release. The package is a working direction and remains subject to team review.

## Files and formats

- `assets/option-a-gradient.svg`: editable white outline on earthy app-icon field.
- `assets/option-a-reverse.svg`: editable filled gradient mark on white, using one mask.
- `option-a-design-sheet.svg` and `.png`: visual construction reference.
- `exports/`: PNGs at 24, 32, 64, 128, 256, 512 and 1024 pixels for both treatments.
- `applications/letterhead-a4.html`: printable A4 layout (210 × 297 mm); use browser Print / Save as PDF if needed.
- `applications/banner-1600x600.html`: 1600 × 600 layout with typography and sample copy.
- `applications/banner-mark-only.svg` and `.png`: portable, text-free banner study, not a final header composition.
- `tokens.json`: machine-readable construction values.

## Master and geometry

The SVG viewBox is `0 0 512 512`. Preserve aspect ratio; scale all components together. The supplied paths are authoritative. Dimensions below are in master units, not physical millimeters.

| Element | Value | Relative to canvas |
|---|---:|---:|
| Bubble stroke | 30 | 5.859375% |
| Arm / connector effective stroke | 22 | 4.296875% |
| Bubble path control bounds, before stroke | x 135–385; y 122–366 | about 48.83% × 47.66% |
| Arm transform | translate(74,53) scale(0.91) | preserve |
| Arm source stroke | 24.175824175824175 | becomes 22 after transform |
| Pedestal control envelope | x 200–312; y 401–436 | 21.875% × 6.836% envelope |
| Suggested external clear space | 30 | 5.859375% |

Control envelopes are not exact painted bounding boxes. Bézier extrema can fall inside the control envelope. Rounded stroke joins also affect painted bounds. Bubble tail tip centerline: (377,358). The bubble is a rounded Bézier form, not a mathematically exact circle. The selected arm is likewise the preferred Bézier construction, not the exact semicircle explored earlier. The selected pair intentionally uses two uniform component weights (30 and 22), with no stroke tapering.

Pedestal path (unchanged from the preferred version):

```svg
M208 413 C211 405 218 401 229 401 H283
C294 401 301 405 304 413 L310 427
C312 432 309 436 303 436 H209
C203 436 200 432 202 427 Z
```

It is a filled rounded pedestal, not an oval, thin pill or horizontal stroke. Preserve its curved shoulders and bottom corners. The connectors were extended during the final review to meet the bubble without gaps.

## Gradient

`linearGradient` uses `gradientUnits="userSpaceOnUse"`, from `(0,0)` to `(512,512)`, upper left to lower right. Interpolation is SVG's default sRGB; spread method defaults to pad.

| Offset | Color | Role |
|---|---|---|
| 0% | #194F59 | Deep teal |
| 40% | #47745E | Muted green |
| 91% | #A96F4D | Warm brown |
| 91–100% | #A96F4D held | Warm corner |

All three stops are from Maggie's approved palette. Intermediate blended pixels are interpolated colors. Do not add a sand/white endpoint: it caused a pale corner. Do not move brown to 62%: that earlier version was rejected as too brown. These stops describe the user's chosen Option 1 blend, not Maggie's separately documented draft blend.

For reverse artwork, render one 512 × 512 gradient rectangle through a mask containing the arm, filled bubble and pedestal. Never apply separate object-bounding-box gradients to individual shapes. White outside the mask is intentional. Reverse and primary share gradient coordinates even though the visible areas differ.

## Reproduction

- Suggested clear space: 30 master units outside the painted mark for standalone placements. This is a proposal, not measured brand approval.
- The 512-unit primary canvas already includes icon padding. Do not add an external clear-space rule inside that canvas.
- Visually reviewed at 24, 32 and 64 px in eight refinement rounds; prefer at least 32 px when layout allows. No universal minimum has been formally approved.
- Use SVG for scaling and PNG when a raster format is required. Do not stretch, skew, add shadows, introduce continent detail or change the pedestal without review.
- App examples include a custom rounded-square preview. Native platform submission assets still need the platform's required unmasked/layered export workflow; these are not a complete submission package.
- RGB/sRGB digital assets only; CMYK conversion and print proofing are not supplied.

## Typography and applications

Maggie's current branch selects Fredoka for large headings and Outfit for body, navigation and buttons. HTML layouts request those Google Fonts. An internet connection is required; Arial is only a fallback. The technical SVG sheet uses Arial deliberately for reproducible rendering, not as a proposed brand typeface. Fonts are not bundled or outlined.

Letterhead and banner layouts are sample applications, not approved stationery or wordmarks. `[App name]`, contact fields and promotional copy are placeholders. TRVLR is not a final name. The mark-only banner is a comparison/application background and contains no typography.

## Maggie compatibility check

Checked branch `maggie` at commit `a57cb786f82f981fe3630d94743870198e1a9f5c`, 2026-11-14:

- [Style guide](https://github.com/Ph1llyCheeSteak/StudyAbroad/blob/a57cb786f82f981fe3630d94743870198e1a9f5c/docs/brand-style-guide-draft.txt)
- [Type preview](https://github.com/Ph1llyCheeSteak/StudyAbroad/blob/a57cb786f82f981fe3630d94743870198e1a9f5c/docs/design/font-hybrid-preview.html)

Aligned: approved colors, Fredoka/Outfit pairing, rounded friendly character, student-led social travel purpose. Differences requiring Maggie/team review: this earth gradient differs from her draft teal/blue blend; the guide discourages decorative generic globes. This logo uses the globe as a specific metaphor combined with conversation, but that does not automatically resolve the concern. The live Canva source was not inspected or synchronized; this check covers the committed branch files only. Do not represent the complete identity as Maggie-approved.
