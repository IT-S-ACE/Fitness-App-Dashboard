import React from 'react'
import { Header_introduction , Feature, Contact } from '../components'
import '../Introduction.css'
function Introduction() {
  return (
    <div >
        {/* <Navbaree /> */}
        <Header_introduction />
        <Feature />
        <Contact />
    </div>
  )
}

export default Introduction;