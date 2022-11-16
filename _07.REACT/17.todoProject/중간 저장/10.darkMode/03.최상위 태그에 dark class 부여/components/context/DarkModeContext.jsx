import { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
  const [darkMode,setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode)
  }
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext);

//darkMode가 true일 때 최상위 엘리먼트에 dark 클래스 부여
const updateDarkMode = (darkMode) => {
  if(darkMode) {
    document.documentElement.classList.add('dark');  //최상의 요소 (html tag)
  } else {
    document.documentElement.classList.remove('dark');
  }
}