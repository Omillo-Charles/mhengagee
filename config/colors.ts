import type { CSSProperties } from "react";

export const colors = {
  primary: "#2D5BFF",
  secondary: "#D62976",
  accentOrange: "#FA7E1E",
  accentYellow: "#FCAF45",
  accentCyan: "#00CCFF",
  navy: "#1E293B",
  backgroundDark: "#0F172A",
  foregroundDark: "#F8FAFC",
  backgroundLight: "#FFFFFF",
  foregroundLight: "#0F172A",
  brandGradient:
    "conic-gradient(from 180deg at 50% 50%, #2D5BFF 0deg, #00CCFF 72deg, #FCAF45 144deg, #FA7E1E 216deg, #D62976 288deg, #2D5BFF 360deg)",
} as const;

export const colorVariables = {
  "--brand-primary": colors.primary,
  "--brand-secondary": colors.secondary,
  "--brand-accent-orange": colors.accentOrange,
  "--brand-accent-yellow": colors.accentYellow,
  "--brand-accent-cyan": colors.accentCyan,
  "--brand-navy": colors.navy,
  "--brand-background-dark": colors.backgroundDark,
  "--brand-foreground-dark": colors.foregroundDark,
  "--brand-background-light": colors.backgroundLight,
  "--brand-foreground-light": colors.foregroundLight,
  "--brand-gradient": colors.brandGradient,
} as CSSProperties;
