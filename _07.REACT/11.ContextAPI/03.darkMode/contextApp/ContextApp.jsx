import React from 'react'
import { useContext } from 'react'
import './ContextApp.css'
import {DarkModeContext, DarkModeProvider} from './DarkModeContext'

const ContextApp = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

const Header = () => {
  return <header className='header'>HEADER</header>
}
const Main = () => {
  return (
    <main className='main'>
      😊 MAIN 😊
      <Profile />
      <Products />
    </main>
  )
}

const Profile = () => {
  return (
    <div>
      - Profile
      <User />
    </div>
  )
}
const User = () => {
  return <div>-- User</div>
}
const Products = () => {
  return (
    <DarkModeProvider>
      - Products
      <ProductDetail />
    </DarkModeProvider>
  )
}
const ProductDetail = () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext); //객체로 받아옴
  console.log(darkMode);
  return (
    <div>
      -- ProductDetail
      <p>
        DarkMode :&nbsp;
        <span style={darkMode ? {backgroundColor:'#333',color:'#fff'}:{backgroundColor:'yellow',color:'blue'}}>
          {darkMode? "Dark Mode":"Light Mode"}
        </span>
      </p>
      <button onClick={()=>toggleDarkMode()}>Toggle</button>
    </div>
  )
}
const Footer = () => {
  return <footer className='footer'>Footer</footer>
}

export default ContextApp