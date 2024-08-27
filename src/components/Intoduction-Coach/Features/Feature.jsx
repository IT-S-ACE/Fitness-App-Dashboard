import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from "../../../assets/SVG/1.svg"
import fimage2 from "../../../assets/SVG/2.svg"
import fimage3 from "../../../assets/SVG/3.svg"
import fimage4 from "../../../assets/SVG/4.svg"

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="WeightLiftin" description="you can add , delete , manipulate the exercies"/>
            <Featurebox image={fimage2} title="Specific Muscle" description/>
            <Featurebox image={fimage3} title="Flex Your Muscle"/>
            <Featurebox image={fimage4} title="Cardio Exercise"/>
        </div>
    </div>
  )
}

export default Feature;