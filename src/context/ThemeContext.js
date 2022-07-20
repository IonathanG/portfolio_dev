import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // check local storage for previous theme preference
  const getTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  let currentTheme = true;
  getTheme === "light" ? (currentTheme = false) : (currentTheme = true);

  const [darkTheme, setDarkTheme] = useState(currentTheme);

  const switchTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);

    darkTheme
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
