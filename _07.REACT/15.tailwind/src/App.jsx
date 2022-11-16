import React from "react";
import "./App.css";
import TailwindComponent from "./TailwindComponent";

function App() {
	return (
		<>
			<TailwindComponent />
		</>
	);
}

export default App;

/*
  https://tailwindcss.com/

  yarn add -D tailwindcss
  yarn tailwindcss init

  tailwind.config.js 파일에 추가(경로설정)

  index.css에 추가(제일 상위 css)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

  vsCode 확장 - tailwind CSS intelliSense설치-Ctrl+space클릭

*/
