import React, { useState } from 'react'
import projectImage from '../../assets/profile.png'
import profile from '../../assets/profile.png'
import planImage from '../../assets/fitness/man_back1.jpg'
import Header from '../Header';
import { ArrowBackRounded, ArrowRight, ArrowRightAltRounded } from '@mui/icons-material';
import Modal from '../Modal';
import { BiPlus } from 'react-icons/bi';
import AddPlan from './CoachADD/AddPlan';
import { useAllPlansData } from '../../hook/Coach/useAllPlansData';
import { useAllExercisePlan } from '../../hook/Coach/useAllExercisePlan';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const CoachProjects = () => {

    const navigate = useNavigate()

    const { data: plans } = useAllPlansData()



    // const handleAllplanExercise = (planName) => {
    //     getExercisesPlan({ plan_name: planName },{ onSuccess:() =>{navigate(`/Exercises-plan/${planName}`)}});
    //     const {data:hamoda} =useAllExercisePlan(planName,{onSuccess})
    // };


    return (
        <section id="projects" className="section-Background h-1200 py-24">
            <div className='flex justify-evenly items-center'>


                <motion.div
                    className='w-1200'
                    initial={{ x: '-100px', opacity: '0' }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='px-4 w-auto '>
                        <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl h-900'>
                            <div className='flex justify-between items-center'>
                                <Header title='Plans' />
                                <Modal buttonContent={<div className='w-32 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Plan</span></div>} numStyle='one'>
                                    <AddPlan />
                                </Modal>
                            </div>
                            <div className='w-full mt-3 overflow-y-scroll border-solid border-gray-300 border-1 rounded-lg hide-scrollbar'>
                                {/*  */}
                                    {/* {plans?.data?.map((plan) => {
                                        
                                        return <>
                                            <div key={plan.id} className=' border-2 border-black m-2 rounded-lg h-24 card-effect'>
                                                <h2 className='flex justify-center items-center text-3xl' >{plan.plan_name}</h2>
                                                
                                                <div className='flex justify-end items-end'>
                                                    <button className=' mt-3 mr-2' onClick={() =>{navigate(`/Exercises-plan/${plan.id}`)}}>
                                                        <ArrowBackRounded className='rotate-180 border-1 border-black rounded-full' />
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    })} */}


                                    {/* plans Card (Coach Card) */}
                                    <div className='p-5'>

                                        <div className="ccccontainer" >
                                            {plans?.data?.map((plan) => {
                                                return <div className="custom-card" key={plan.id}>
                                                    {/* <div className="img-box"><img src={`https://142c-89-39-107-204.ngrok-free.app/Uploads/${plan.image}`} /></div> */}
                                                    <div className="img-box"><img src={planImage} alt='plan' /></div>
                                                    <div className="custom-content">
                                                        <h2>{plan.plan_name}</h2>
                                                        <div className="">
                                                            <div>
                                                                <p><span className='font-extrabold'> ID : </span>{plan.id}</p>
                                                                <p><span className='font-extrabold'>Plan Name : </span> {plan.phone_number}</p>
                                                            </div>
                                                            <div>
                                                                <p ><span className='font-extrabold'>Target :</span> {plan.target}</p>
                                                                <p ><span className='font-extrabold'>Choose :</span> {plan.choose}</p>
                                                                <p ><span className='font-extrabold'>Level :</span> {plan.level}</p>
                                                                <p className="description max-h-14 overflow-auto"><span className='font-extrabold'>Discription :</span> {plan.description}</p>
                                                            </div>
                                                            <div className='flex justify-end items-end'>
                                                                <button className=' mt-3 mr-2' onClick={() => { navigate(`/Exercises-plan/${plan.id}`) }}>
                                                                    <ArrowBackRounded className='rotate-180 border-1 border-black rounded-full' />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                            }


                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className=' w-96'
                    initial={{ x: '100px', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h1 className="text-center text-7xl font-bold text-white mr-11 mb-10">You can see your <span className='text-blue-400'>Plans</span> and check it and Add on it</h1>
                </motion.div >

            </div>
        </section>
    )
}

export default CoachProjects



