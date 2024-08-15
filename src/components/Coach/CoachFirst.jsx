import { animate, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import profile from '../../assets/profile.png';
import { earningData } from '../../data/dummy'
import { duration } from '@mui/material';
import {useCoachGetInfo} from '../../hook/Coach/useCoachGetInfo.js'
import { useStateContext } from '../../contexts/ContextProvider.js';

const CoachFirst = () => {
  const { coachID , setStorCoachID} = useStateContext()

  useEffect(() => {
    // Check if coachID is null and retrieve it from localStorage if necessary
    if (!coachID) {
      const storedCoachID = localStorage.getItem('coachId');
      if (storedCoachID) {
        setStorCoachID(storedCoachID);
      }
    }
  }, [coachID, setStorCoachID]);

  console.log(coachID)
  const {data : coachInfo} = useCoachGetInfo({coachID})
  console.log(coachInfo )

  const profileAnimate = {
    initial : {x : '100px' , opacity : 0},
    animate : {x : '0' , opacity : 1},
    transition : {type : 'spring' , stiffness: 50 , duration : 0.5 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="flex items-center bg-cover bg-center section-Background h-screen">
      <div className="text-center p-20 flex justify-between items-center">
        <motion.div
          className="mt-10 w-700 flex flex-wrap h-400"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {earningData.map((item) => (
            <motion.div
              key={item.title}
              className="cards-width bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-1 rounded-2xl m-7 drop-shadow-lg card-Background"
              variants={childVariants}
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  background: item.iconBg,
                  boxShadow: item.iconShadow,
                }}
                className="text-2xl p-6 rounded-sm hover:drop-shadow-xl -translate-x-20 -translate-y-10"
              >
                <span className="w-14 h-14 overflow-visible text-4xl text-center leading-14 mb-1">
                  {item.icon}
                </span>
              </button>
              <p className="mt-3 flex justify-end items-center">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-200 mt-1 flex justify-end items-center">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
        initial= {profileAnimate.initial}
        animate = {profileAnimate.animate}
        transition={profileAnimate.transition}
        className="bg-white w-96 ml-52 rounded-lg card-Background mt-10"
        >
          <div className="flex justify-center -translate-y-11">
            <img src={`https://de68-138-199-7-163.ngrok-free.app/Uploads/${coachInfo?.coach[0]?.image}`} alt="Coach Profile" className="rounded-full w-32 h-32 border-1 border-black" />
          </div>
          <p className="text-2xl">{coachInfo?.coach[0]?.name}</p>
          <p className="my-3">{coachInfo?.coach[0]?.bio}</p>
          <p className="m-5">
          {coachInfo?.coach[0]?.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachFirst;



