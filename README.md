# Decision Origami — GenLayer Spinner

A production-ready loading spinner for the **Design the GenLayer Spinner** Builder mission.

**Decision Origami** turns the GenLayer mark into a controlled fold-and-resolve loop: the left and right wings move as true mirrors, the core unfolds only after the wings seat, the exact GenLayer mark holds as the resolved state, and the sequence reverses into the next loading cycle.

## Why this motion belongs to GenLayer

The motion is built from the GenLayer mark itself rather than placing a generic loading ring around it. Its choreography is deliberately ordered:

1. both outer wings fold inward **symmetrically**;
2. the center core unfolds into place;
3. the exact GenLayer mark holds as the decision/finality state;
4. a restrained confirmation pulse completes the verdict;
5. the fold reverses with the same mirrored timing.

The result is a small visual metaphor for independent structure resolving into a single agreed state, while remaining usable as an everyday Portal loading indicator.

## Mission fit

- **Web-ready:** standalone animated SVG; no JavaScript or animation dependency required.
- **Smooth infinite loop:** `2.12s`, CSS keyframes, transform/opacity driven.
- **Light and dark:** canonical implementation uses `currentColor`; the Portal controls the foreground color.
- **Small-size aware:** demo includes 16, 20, 24, 32, 48 and 64 px views.
- **Accessible:** `prefers-reduced-motion` resolves to the static GenLayer mark.
- **Builder-ready:** standalone SVG, CSS implementation and optional React/TypeScript wrapper are included.

## Files

```text
src/
├── genlayer-spinner.svg       # zero-dependency standalone spinner
├── genlayer-spinner.css       # reusable inline-SVG animation styles
└── GenLayerSpinner.tsx        # optional React/TypeScript wrapper

docs/
├── index.html                 # light/dark + size playground
└── genlayer-spinner.svg       # demo asset

tests/
└── validate.mjs               # zero-dependency structural checks

DESIGN.md                      # choreography and design rationale
SUBMISSION.md                  # Portal submission copy
```

## Fastest integration

### Standalone SVG

Copy `src/genlayer-spinner.svg` and use it **inline**. Inline usage inherits `currentColor`, which makes light/dark theming trivial.

```html
<div style="color:#000;width:24px">
  <!-- inline contents of genlayer-spinner.svg -->
</div>
```

For a dark surface, set the parent color to white.

### React

```tsx
import { GenLayerSpinner } from "./src/GenLayerSpinner";

<GenLayerSpinner size={24} color="currentColor" />
```

Optional controls:

```tsx
<GenLayerSpinner size={32} duration="2.5s" color="#fff" />
```

## Validation

```bash
npm test
```

The validation script checks the canonical viewBox, exact logo polygons, mirrored wing keyframes, infinite animation, `currentColor`, small-size demo coverage and reduced-motion behavior.

## Demo

Open `docs/index.html` locally. For public evidence, enable **GitHub Pages** on this repository and serve either `/docs` or the repository root.

## License

MIT.
