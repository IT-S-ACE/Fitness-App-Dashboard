// import React from 'react';
// import offerImage from '../../assets/eggs-e1648216350119-500x500.jpeg';
// import profile from '../../assets/profile.png';
// import Header from '../Header';
// import { motion } from 'framer-motion';

// const CoachService = () => {
//     const services = [
//         {
//             icon: 'fa-edit',
//             title: 'Script Writing',
//             description: 'Research and write scripts for different topics that can be directly recorded for video production.',
//         },
//         {
//             icon: 'fa-video',
//             title: 'Video Production',
//             description: 'Research and write scripts for different topics that can be directly recorded for video production.',
//         },
//         {
//             icon: 'fa-graduation-cap',
//             title: 'Curriculum Development',
//             description: 'Research and write scripts for different topics that can be directly recorded for video production.',
//         },
//     ];

//     return (
//         <section id="services" className="py-24 bg-cover bg-center section-Background2">
//             <div className='flex justify-evenly items-center'>
//                 <motion.div 
//                     className='w-96'
//                     initial={{ x: '-100vw', opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ type: 'sprin', stiffness: 50, duration: 0.8 }}
//                 > 
//                     <h1 className="text-center text-7xl font-bold text-white mr-11 mb-10">
//                         You can see your <span className='text-blue-400'>Trainers</span> data and check it
//                     </h1>
//                 </motion.div>
                
//                 <motion.div 
//                     className='w-800'
//                     initial={{ x: '100vw', opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
//                 >
//                     <div className='px-4 w-auto '>
//                         <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl '>
//                             <div className='flex justify-between items-center'>
//                                 <Header title='Trainers' />
//                             </div>
//                             <div className='w-full mt-3 max-h-96 overflow-y-scroll border-solid border-gray-300 border-1 rounded-lg hide-scrollbar'>
//                                 <table className='w-full table-auto border-collapse'>
//                                     <thead className='bg-gray-200 text-green-600 sticky top-0 z-10'>
//                                         <tr>
//                                             <th className='px-4 py-2 border-b-2 border-gray-300'>ID</th>
//                                             <th className='px-4 py-2 border-b-2 border-gray-300'>Image</th>
//                                             <th className='px-4 py-2 border-b-2 border-gray-300'>Name</th>
//                                             <th className='px-4 py-2 border-b-2 border-gray-300'>Goal</th>
//                                             <th className='px-4 py-2 border-b-2 border-gray-300'>End Date</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
//                                             <tr key={id} className='hover:bg-gray-100'>
//                                                 <th className='px-4 py-2 border-b'>{id}</th>
//                                                 <th className='px-4 py-2 border-b'>
//                                                     <img src={profile} alt="Article" className='w-14 h-14' />
//                                                 </th>
//                                                 <th className='px-4 py-2 border-b'>Ahmed</th>
//                                                 <th className='px-4 py-2 border-b'>Build Muscle</th>
//                                                 <th className='px-4 py-2 border-b'>22/19/1986</th>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

// export default CoachService;



import React from 'react';
import offerImage from '../../assets/eggs-e1648216350119-500x500.jpeg';
import profile from '../../assets/profile.png';
import Header from '../Header';
import { motion } from 'framer-motion';
import { useAllTrainersData } from '../../hook/Coach/useAllTrainersData';

const CoachService = () => {

    const {data : allTrainers} = useAllTrainersData()

    return (
        <section id="services" className="py-24 bg-cover bg-center section-Background2">
            <div className='flex justify-evenly items-center'>
                <motion.div 
                    className='w-96'
                    initial={{ x: '-100px', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h1 className="text-center text-7xl font-bold text-white mr-11 mb-10">
                        You can see your <span className='text-blue-400'>Trainers</span> data and check it
                    </h1>
                </motion.div>
                
                <motion.div 
                    className='w-800'
                    initial={{ x: '100px', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='px-4 w-auto '>
                        <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl '>
                            <div className='flex justify-between items-center'>
                                <Header title='Trainers' />
                            </div>
                            <div className='w-full mt-3 max-h-96 overflow-y-scroll border-solid border-gray-300 border-1 rounded-lg hide-scrollbar'>
                                <table className='w-full table-auto border-collapse'>
                                    <thead className='bg-gray-200 text-green-600 sticky top-0 z-10'>
                                        <tr>
                                            <th className='px-4 py-2 border-b-2 border-gray-300'>ID</th>
                                            <th className='px-4 py-2 border-b-2 border-gray-300'>Image</th>
                                            <th className='px-4 py-2 border-b-2 border-gray-300'>Name</th>
                                            <th className='px-4 py-2 border-b-2 border-gray-300'>Goal</th>
                                            <th className='px-4 py-2 border-b-2 border-gray-300'>Start Date</th>
                                            <th className='px-4 py-2 border-b-2 border-gray-300'>End Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allTrainers?.data?.map((trainer) => {
                                            return <>
                                                <tr key={trainer.id} className='hover:bg-gray-100'>
                                                <th className='px-4 py-2 border-b'>{trainer.user.id}</th>
                                                <th className='px-4 py-2 border-b'>
                                                    <img src={profile} alt="Article" className='w-14 h-14' />
                                                </th>
                                                <th className='px-4 py-2 border-b'>{trainer.user.name}</th>
                                                <th className='px-4 py-2 border-b'>{trainer.user.target}</th>
                                                <th className='px-4 py-2 border-b'>{trainer.user.created_at}</th>
                                                <th className='px-4 py-2 border-b'>{trainer.user.updated_at}</th>
                                            </tr>
                                            </>
                                        })}
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                                            <tr key={id} className='hover:bg-gray-100'>
                                                <th className='px-4 py-2 border-b'>{id}</th>
                                                <th className='px-4 py-2 border-b'>
                                                    <img src={profile} alt="Article" className='w-14 h-14' />
                                                </th>
                                                <th className='px-4 py-2 border-b'>Ahmed</th>
                                                <th className='px-4 py-2 border-b'>Build Muscle</th>
                                                <th className='px-4 py-2 border-b'>22/19/1986</th>
                                                <th className='px-4 py-2 border-b'>22/19/1986</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CoachService;

