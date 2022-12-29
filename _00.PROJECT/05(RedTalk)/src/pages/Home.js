import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import FriendsList from './FriendsList'
import './Home.scss'
import { useDispatch } from 'react-redux'
import { getDataListAction } from '../redux/action/userDataListAction'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getDataListAction.getUserData())
  },[])
  return (
    <div id='homePage'>
      <Navbar />
      <FriendsList />
    </div>
  )
}

export default Home
