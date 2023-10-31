import React, { createContext, useEffect, useState } from 'react';

export const galleryContext = createContext();

const Provider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        // select html element
        const html = document.querySelector('html');
        //add or remove class dark in html elem according to theme in localStorage.
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme, setTheme]);


    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const values = {theme, setTheme, handleThemeSwitch};
    return (
        <galleryContext.Provider value={values}>
            {children}
        </galleryContext.Provider>
    );
};

export default Provider;