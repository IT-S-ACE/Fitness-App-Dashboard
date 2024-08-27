import React from 'react'
import CoachHeader from '../../components/Coach/Sections/NavBar/CoachHeader'
import CoachService from '../../components/Coach/Sections/Trainers/CoachService'
import CoachProjects from '../../components/Coach/Sections/Plans/CoachProjects'
import CoachContacts from '../../components/Coach/Sections/Meals/CoachContacts'
import CoachFooter from '../../components/Coach/Sections/Footer/CoachFooter'
import CoachFirst from '../../components/Coach/Sections/Profile/CoachFirst'

const CoachMain = () => {
  return (
    <>
        <CoachHeader />
        <CoachFirst />
        <CoachService />
        <CoachProjects />
        <CoachContacts />
        <CoachFooter />
    </>
  )
}

export default CoachMain