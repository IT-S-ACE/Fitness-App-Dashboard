import React from 'react'
import CoachHeader from '../components/Coach/CoachHeader'
import CoachService from '../components/Coach/CoachService'
import CoachProjects from '../components/Coach/CoachProjects'
import CoachContacts from '../components/Coach/CoachContacts'
import CoachFooter from '../components/Coach/CoachFooter'
import CoachFirst from '../components/Coach/CoachFirst'

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