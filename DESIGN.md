# Decision Origami — Design Specification

## Core idea

The GenLayer mark behaves like a decision being folded into final form. This is not a rotating logo and not a decorative orbit around the brand. The brand geometry itself is the motion system.

## Choreography

### 0–38% — mirrored fold
The two outer wings start at the same frame and use equal-but-opposite translations and rotations. Their easing and keyframe timestamps are identical.

### 24–64% — core resolve
The center core remains absent until the outer geometry is nearly seated, then unfolds upward and settles into its exact position.

### 64–80% — finality hold
An exact, static copy of the GenLayer mark is held. This prevents the resolved state from being a near-logo caused by a transform interpolation.

### 68–90% — confirmation
A restrained outline pulse marks resolution without introducing extra color or decorative effects.

### 78–100% — reverse
The loop leaves the decision state by reversing the same geometry. The left/right wings remain mirrored through the reset.

## Production constraints

- ViewBox: `0 0 400 400`
- Color: `currentColor`
- Default duration: `2.12s`
- No JavaScript required for the standalone asset
- No external animation library
- Reduced motion: static exact GenLayer mark
- Intended production sizes: 16–64px, with 24px as the primary Portal target

## Exact logo geometry

```text
left:  183,33 20,372 179,310 122,279 183,152
right: 218,33 218,151 280,281 222,310 382,373
core:  200,195 166,265 200,283 235,266
```
