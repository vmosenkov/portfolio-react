import React from 'react';
import { useEffect } from "react";

// dependencies - icon
import { BsSun } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';

// hooks
import { useLocalStorage } from '../../../hooks/useLocalStorage';

// utils
import detectSystemTheme from './../../../utils/detectSystemTheme';

// styles
import './SwitchTheme.css'


const Theme = () => {

   const [theme, setTheme] = useLocalStorage('theme', detectSystemTheme())

   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme]);

   
   // Если меняются системные настройки, меняем тему
   useEffect(() => {
      window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
         const newColorScheme = event.matches ? "dark" : "light";
         setTheme(newColorScheme);
      });
   },[setTheme]);

   const btnNotActive = "dark-mode-btn";
   const btnActive = "dark-mode-btn dark-mode-btn--active";
   
   return (
      <>
         <button className={theme === 'dark' ? btnActive : btnNotActive} onClick={toggleTheme}>
            <BsSun className="dark-mode-btn__icon"/>
            <BsFillMoonStarsFill className="dark-mode-btn__icon"/>
         </button>
      </>
  )
}

export default Theme