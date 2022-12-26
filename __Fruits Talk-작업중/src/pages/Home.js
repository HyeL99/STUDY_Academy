import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AddFriend from './AddFriend'
import ChatList from './ChatList'
import FriendsList from './FriendsList'
import Setting from './Setting'
import './Home.scss'
import { useSelector } from 'react-redux'

const Home = () => {
  
  return (
    <div id='homePage'>
      <Navbar />
      <FriendsList />
    </div>
  )
}

export default Home
