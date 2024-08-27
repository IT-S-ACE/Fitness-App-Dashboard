import React from 'react'

const TextFeildUi = ({label , value , onChange}) => {
    return (
        <div className='div-Feild-From-ui'>
            <div className='Head-Feild-form-ui'>
                <label> {label}</label>
            </div>
            <div className='Body-Feild-form-ui'>
                <input type='text' value={value} onChange={onChange} />
            </div>
        </div>
    )
}

export default TextFeildUi