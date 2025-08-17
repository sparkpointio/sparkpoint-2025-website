'use client';

import { useState, useEffect } from 'react'; type ThemeChangeEvent = CustomEvent<{ isDarkMode: boolean }>;

/**
 * Custom hook to manage dark mode state
 * @returns Object containing isDarkMode state and toggleDarkMode function
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to update the dark mode state based on localStorage
    const updateDarkMode = () => {
      const darkModeFromStorage = localStorage.getItem("dark") === "true";
      setIsDarkMode(darkModeFromStorage);
    };// Initial check and apply class
    const initialDark = localStorage.getItem("dark") === "true";
    setIsDarkMode(initialDark);
    if (initialDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Optionally dispatch the event for other listeners on initial load
    window.dispatchEvent(new CustomEvent('themeChange', {
      detail: { isDarkMode: initialDark }
    }));

    // Listen for the custom themeChange event
    const handleThemeChange = (event: ThemeChangeEvent) => {
      setIsDarkMode(event.detail?.isDarkMode || false);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);

    // Set up a MutationObserver to watch for changes to the html element's class list
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
      observer.disconnect();
    };
  }, []);  // Function to toggle dark mode
  function toggleDarkMode() {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("dark", newDarkModeState.toString());// Update document class
    if (newDarkModeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Dispatch a custom event that other components can listen for
    window.dispatchEvent(new CustomEvent('themeChange', {
      detail: { isDarkMode: newDarkModeState }
    }));
  }; return { isDarkMode, toggleDarkMode };
}

