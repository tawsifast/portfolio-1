export const EASE_ENTRANCE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_HOVER: [number, number, number, number] = [0.4, 0, 0.2, 1];
export const EASE_LINEAR = "none" as const;

export const DUR_MICRO = 0.2;
export const DUR_ENTRANCE = 0.6;
export const DUR_AMBIENT = 12;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;