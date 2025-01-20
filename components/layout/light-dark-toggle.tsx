'use client';

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const LightDarkToggle = () => {
  // Persist dark mode state in localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode.toString());
  };

  return (
      <div className="fixed bottom-[70px] left-[10px] z-[10]" id="light-dark-toggle-container">
        <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={toggleDarkMode}
            defaultChecked={localStorage.getItem("dark-mode") === "true"}
        />
        <label htmlFor="checkbox" className="checkbox-label">
            <FontAwesomeIcon icon={faMoon} />
            <FontAwesomeIcon icon={faSun} />
          <span className="ball"></span>
        </label>
      </div>
  );
};

export default LightDarkToggle;
