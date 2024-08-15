import React from 'react';

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='a-b-text'>
            <h2>{props.title}dashboard</h2>
            <p className='hover:cursor-pointer'>{props.description}</p>
        </div>
    </div>
  )
}

export default Featurebox;