import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as React from "react";
import { type Theme, ThemeEnum } from "../types/theme.ts";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider: React.FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(ThemeEnum.LIGHT);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) return;
    if (!Object.values(ThemeEnum).includes(savedTheme as Theme)) {
      localStorage.removeItem("theme");
    } else {
      setTheme(savedTheme as Theme);
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme((prev) =>
          prev === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT,
        );
        localStorage.setItem(
          "theme",
          theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT,
        );
      },
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Using theme context outside of its scope");
  }
  return context;
};
