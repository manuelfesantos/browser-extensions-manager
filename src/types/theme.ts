export const ThemeEnum = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = (typeof ThemeEnum)[keyof typeof ThemeEnum];
