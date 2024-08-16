import React from 'react'
import { useParams } from 'react-router-dom'
import { useAllExercisePlan } from '../../hook/Coach/useAllExercisePlan'
import Modal from '../Modal'
import Header from '../Header'
import { BiPlus } from 'react-icons/bi'
import profile from '../../assets/profile.png'
import CoachAddExercise from './CoachADD/CoachAddExercise'
import { useCoachDeleteExercise } from '../../hook/Coach/useCoachDeleteExercise'
import { Delete } from '@mui/icons-material'

const ExercisesPlan = () => {
  const { planID } = useParams()
  const { data, isLoading, isError, error } = useAllExercisePlan(planID)

  //Delete Exercise
  const { mutate: deleteExercise } = useCoachDeleteExercise()

  const handleDelete = (exerciseID) => {
    deleteExercise(exerciseID);
  };
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {/* <div
      key={data?.data[0]?.id}
      ></div> */}
      {/* {data?.data[0]?.exercises[0]?.calories} */}
      <div className='px-4 w-auto '>
        {/* <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl drop-shadow-xl'> */}
        <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl '>
          <div className='flex justify-between items-center'>
            <Header category="Page" title='Exercises' />
            <Modal buttonContent={<div className='w-36 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Exercise</span></div>} numStyle='five'>
              <CoachAddExercise plan_id={planID} />
            </Modal>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            {data?.data?.map((exercise) => {
              return <>
                <div key={exercise.id} className='border-2 border-black rounded-xl flex'>
                  <img src={`https://48c4-146-70-246-155.ngrok-free.app/Uploads/${exercise.gif}`} alt="Exercise" className='w-48 h-48 m-4 border-1 border-gray-500 rounded-xl ' />
                  <div className='grid grid-cols-2'>
                    <div className='mt-8 border-r-1 ml-1 border-gray-600 h-40 mr-8'>
                      <p className='text-xl mb-5'><span className='font-extrabold'> Name : </span> {exercise.exercise_name}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>Calories :</span> {exercise.calories}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>time :</span> {exercise.time}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'> Reps : </span> {exercise.reps}</p>
                    </div>
                    <div className='mt-10 ml-6 pr-3 '>
                      <p className='text-xl mb-5'><span className='font-extrabold'>Target :</span> {exercise.target}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>disease :</span> {exercise.diseases}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'> level : </span> {exercise.level}</p>
                      <p className='text-xl mb-5'><span className='font-extrabold'>choose :</span> {exercise.choose}</p>
                      <a href="#Delete" className="no-underline text-blue-600 "
                        onClick={() => handleDelete(exercise.id)}  
                      >
                        
                        <Delete className='text-red-500 text-4xl' />
                        <p>{exercise.id}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            })}


            <div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ExercisesPlan