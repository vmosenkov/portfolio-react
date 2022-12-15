// Проверка темной темы на уровне системных настроек
const detectSystemTheme = () => {
   if (
      window.matchMedia && 
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
      return 'dark'
   }
   return 'light'
};

export default detectSystemTheme