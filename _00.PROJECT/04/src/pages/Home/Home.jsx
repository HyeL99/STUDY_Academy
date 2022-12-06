import React from 'react'
import './Home.scss'

const Home = ({loading}) => {
  return (
    <div className={loading? 'home loading':'home'}>
      <section className="title">
        
      </section>
    </div>
  )
}

export default Home