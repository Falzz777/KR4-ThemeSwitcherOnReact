import React from 'react';

const ThemeToggle = ({ isDarkTheme, toggleTheme }) => {
    return (
        <div className="theme-toggle">
            <button className="button" onClick={toggleTheme}>
                {isDarkTheme ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
            </button>
        </div>
    );
};

export default ThemeToggle;