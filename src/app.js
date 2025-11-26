import React, { useState, useEffect } from 'react';
import Header from './components/header';
import MainContent from './components/mainContent';
import ThemeToggle from './components/themeToggle';
import './app.css';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Header />
            <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <MainContent isDarkTheme={isDarkTheme} />
        </div>
    );
}

export default App;