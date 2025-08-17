'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "@/lib/utils/hooks/useDarkMode";

const LightDarkToggle = () => {
    // Use our custom hook to manage dark mode
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="fixed bottom-[70px] left-[10px] z-[10]" id="light-dark-toggle-container">
            <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onChange={toggleDarkMode}
                checked={isDarkMode}
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
