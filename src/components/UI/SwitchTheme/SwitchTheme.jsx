import React from 'react';
import { useEffect } from "react";
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import detectSystemTheme from './../../../utils/detectSystemTheme';

// icons - themes
import sun from "./icons/sun.svg";
import moon from "./icons/moon.svg";

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
            {/* {theme === 'light' ? (<img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>) : (<img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>)}{' '} */}
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
         </button>
      </>
  )
}

export default Theme