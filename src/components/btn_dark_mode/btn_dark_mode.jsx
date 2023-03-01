import { useEffect } from "react";
import { useLocalStorage } from "../../utils/use_local_storage";
import { detectDarkMode } from "../../utils/detectDarkMode";

import "./btn_dark_mode.css";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    darkMode === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      onClick={toggleDarkMode}
      className={darkMode === "dark" ? btnActive : btnNormal}
    >
      <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
      <img className="dark-mode-btn__icon" src={moon} alt="Dark mode" />
    </button>
  );
}

export { BtnDarkMode };
