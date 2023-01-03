import React from 'react'
import Banner from '../components/Banner'
import SectionCategory from '../components/SectionCategory'
import Footer from '../components/Footer'
import SectionRecipe from '../components/SectionRecipe'
import SectionVideo from '../components/SectionVideo'
import './Home.scss'

const Home = () => {
  return (
    <div id='homePage'>
      <Banner />
      <SectionCategory />
      <SectionRecipe />
      <SectionVideo />
    </div>
  )
}

export default Home