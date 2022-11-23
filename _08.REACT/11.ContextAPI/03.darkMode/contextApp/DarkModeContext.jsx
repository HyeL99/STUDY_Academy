import { createContext, useState } from "react";

export const DarkModeContext = createContext();
//데이터를 콘텍스트에 담고 있음(컴포넌트처럼 쓰임)

//데이터를 가지고 보여주는 우산 역할 (부모 우산 컴포넌트)
export const DarkModeProvider = ({children}) => {
  const [darkMode,setDarkMode] = useState(false);
  //다크모드인지 아닌지 기억하는 상태, 초기값은 다크모드가 아님
  
  const toggleDarkMode = () => {
    setDarkMode((mode)=>!mode);
  }
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}

// 컨텍스트(DarkModeContext)에는 내장 프로퍼티  Provider가 있음
// DarkModeContext.Provider를 통해 value값 설정