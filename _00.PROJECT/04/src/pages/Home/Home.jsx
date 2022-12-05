import React from 'react'
import './Home.scss'

const Home = ({loading}) => {
  return (
    <div className={loading? 'home loading':'home'}>
      Home
    </div>
  )
}

export default Home