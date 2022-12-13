import React from 'react'
import AboutMeM from './AboutMeM'
import CloneM from './CloneM'
import ContactMeM from './ContactMeM'
import ProjectM from './ProjectM'

const MobileHome = ({loading}) => {
  return (
    <div className={loading? 'mobile loading scroll':'mobile scroll'}>
      <AboutMeM />
      <ProjectM />
      <CloneM />
      <ContactMeM />
    </div>
  )
}

export default MobileHome