import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
  const [darkMode,setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode)
  }

  //https://tailwindcss.com/docs/dark-mode > 상태유지부분에서 복사
  //제일 처음 마운트(로딩) 될 때 최종 상태가 다크모드인지 아닌지 판단하고 그대로 초기값 설정
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  useEffect(() => { //화면이 처음 로딩될 때에만 작동
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    // 로컬에서 검사 후 변수 isDark에 넣어줌
    setDarkMode(isDark);  //다크모드인지 아닌지 내부 상태 업데이트
    updateDarkMode(isDark);
  }, [])
  

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
    localStorage.theme = 'dark';  //업데이트 될 때마다 로컬 스토리지에 저장
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}