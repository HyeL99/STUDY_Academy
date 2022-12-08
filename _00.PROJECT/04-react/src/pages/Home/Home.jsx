import React from 'react'
import AboutMe from './AboutMe'
import CloneCoding from './CloneCoding'
import ContactMe from './ContactMe'
import './Home.scss'
import Project from './Project'

const Home = ({loading}) => {
  return (
    <div className={loading? 'home loading scroll':'home scroll'}>
      <AboutMe />
      <Project />
      <CloneCoding />
      <ContactMe />
    </div>
  )
}

export default Home