import { useState, useEffect } from "react";

export default function useUITheme() {
  function toggleDarkMode() {
    if (!window) return;
    setDarkMode((val) => {
      localStorage.setItem("DarkMode", String(!val));
      return !val;
    });
  }

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!window) return;
    setDarkMode(localStorage.getItem("DarkMode") === "true");
  }, []);

  useEffect(() => {
    if (!window) return;
    if (darkMode) window.document.body.classList.add("DarkMode");
    else window.document.body.classList.remove("DarkMode");
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}
