import React, { useState } from 'react'
import  Header  from '../../components/Header/Header'
import BillsCard from '../../components/Cards/BillsCard';

const Bills = () => {
    const [active, setActive] = useState(false);
    return (
        <>  
            <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl w-1300 shadow-xl'>
                <div className='flex justify-between items-center'>
                    <Header category="Page" title='Bills' />
                </div>
                <div className='flex flex-wrap w-full'>
                    <BillsCard />
                </div>
            </div>
        </>
    )
}

export default Bills