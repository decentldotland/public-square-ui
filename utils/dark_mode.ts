import { useState, useEffect, SetStateAction, Dispatch } from "react";

export default function useUITheme(): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!window) return;
    setDarkMode(localStorage.getItem("DarkMode") === "true");
  }, []);

  useEffect(() => {
    if (!window) return;

    if (darkMode) window.document.body.classList.add("DarkMode");
    else window.document.body.classList.remove("DarkMode");

    localStorage.setItem("DarkMode", darkMode.toString());
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
