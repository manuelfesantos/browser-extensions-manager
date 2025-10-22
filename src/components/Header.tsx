import * as React from "react";
import { useThemeContext } from "../contexts/themeContext.tsx";
import { ThemeEnum } from "../types/theme.ts";
import "./Header.css";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <header className="Header">
      <img
        src={
          theme === ThemeEnum.DARK
            ? "/images/logo-dark.svg"
            : "/images/logo.svg"
        }
        alt="Extensions Logo"
      />
      <button
        onClick={toggleTheme}
        type="button"
        className="Header-theme-btn focus"
      >
        <img
          src={
            theme === ThemeEnum.LIGHT
              ? "/images/icon-moon.svg"
              : "/images/icon-sun.svg"
          }
          alt="Theme toggler button"
        />
      </button>
    </header>
  );
};
