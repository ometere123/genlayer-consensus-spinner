import type { CSSProperties, SVGProps } from "react";
import "./genlayer-spinner.css";

export type GenLayerSpinnerProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
  size?: number | string;
  duration?: string;
  color?: string;
  label?: string;
};

export function GenLayerSpinner({ size = 24, duration = "2.12s", color = "currentColor", label = "Loading", style, ...props }: GenLayerSpinnerProps) {
  const resolvedSize = typeof size === "number" ? `${size}px` : size;
  const spinnerStyle = { "--gl-spinner-size": resolvedSize, "--gl-spinner-duration": duration, color, ...style } as CSSProperties;
  return (
    <svg {...props} className={`genlayer-spinner ${props.className ?? ""}`.trim()} viewBox="0 0 400 400" role="status" aria-label={label} style={spinnerStyle}>
      <path className="gl-crease gl-crease-left" pathLength="1" d="M 102 218 L 181 154" />
      <path className="gl-crease gl-crease-right" pathLength="1" d="M 298 218 L 219 153" />
      <path className="gl-crease gl-crease-core" pathLength="1" d="M 200 334 L 200 241" />
      <polygon className="gl-piece gl-left" points="183,33 20,372 179,310 122,279 183,152" />
      <polygon className="gl-piece gl-right" points="218,33 218,151 280,281 222,310 382,373" />
      <polygon className="gl-piece gl-core" points="200,195 166,265 200,283 235,266" />
      <g className="gl-exact-logo" aria-hidden="true">
        <polygon className="gl-piece" points="183,33 20,372 179,310 122,279 183,152" />
        <polygon className="gl-piece" points="218,33 218,151 280,281 222,310 382,373" />
        <polygon className="gl-piece" points="200,195 166,265 200,283 235,266" />
      </g>
      <circle className="gl-pulse" cx="200" cy="235" r="96" aria-hidden="true" />
    </svg>
  );
}
