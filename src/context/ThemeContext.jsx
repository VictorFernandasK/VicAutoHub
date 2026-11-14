import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function changeTheme() {
        setDarkMode(!darkMode);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, changeTheme }}>
            <div className={darkMode ? "dark" : "light"}>
                {children}

            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;