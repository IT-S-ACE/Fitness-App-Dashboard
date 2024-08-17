import { Delete } from '@mui/icons-material';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Modal from '../Modal';
import Header from '../Header';
import CoachAddMeal from './CoachADD/CoachAddMeal';
import { BiPlus } from 'react-icons/bi';
import CoachAddIngredient from './CoachADD/CoachAddIngredient';
import sEgg from '../../assets/paella.jpg';
import { useCoachAllMealsData } from '../../hook/Coach/useCoachAllMealsData';
import { useCoachAllingredientsData } from '../../hook/Coach/useCoachAllingredientsData';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useCoachDeleteIngredient } from '../../hook/Coach/useCoachDeleteIngredient';
import { useCoachDeleteMeal } from '../../hook/Coach/useCoachDeleteMeal';

const CoachContacts = () => {

    const { data: AllMeals } = useCoachAllMealsData();

    const { data: allIngredients } = useCoachAllingredientsData();

    //Delete Ingredient
    const { mutate: deleteIngredient } = useCoachDeleteIngredient()

    const handleDeleteIngredient = (ingredientID) => {
        deleteIngredient(ingredientID);
    };

    //Delete Meal
    const { mutate: deleteMeal } = useCoachDeleteMeal()

    const handleDelete = (mealID) => {
        deleteMeal(mealID);
    };


    const cardAnimation = {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 0.5, ease: 'easeOut' }
    };


    return (
        <section id="Contact" className="section-Background py-24 h-800 flex">
            {/* Ingredients */}
            <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl w-600 shadow-xl h-135'>
                <div className='flex justify-between items-center'>
                    <Header category="SubPage" title='Ingredients' />
                    <Modal buttonContent={<div className='w-40 flex justify-between items-center'><BiPlus className='scale-125' /><span>Add Ingredient</span></div>} numStyle='two'>
                        <CoachAddIngredient />
                    </Modal>
                </div>
                <div className='flex overflow-x-scroll'>
                    {allIngredients?.ingredient?.map((ing) => (
                        <motion.div
                            key={ing.id}
                            className="bg-black border-1 border-black min-h-56 min-w-52 overflow-hidden w-80 rounded-xl m-5 card-effect"
                            initial={cardAnimation.initial}
                            whileInView={cardAnimation.whileInView}
                            transition={cardAnimation.transition}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="">
                                <img className='w-full h-52' src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${ing.image}`} alt={ing.name} />
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-white">Ingredient</p>
                                <strong className="flex justify-between font-extrabold mt-3">
                                    <span className='text-white '>
                                        {ing.id} - {ing.name}
                                    </span>
                                    <a href="#MealDelete" className="no-underline text-blue-600"
                                        // onClick={() => console.log(`Meal ID: ${exercise.id}`)}
                                        onClick={() => handleDeleteIngredient(ing.id)}
                                    >
                                        <Delete className='text-red-500' />
                                    </a>
                                </strong>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Meals */}
            <div className='ml-4 p-10 border-1 border-gray-300 rounded-3xl w-1000 h-600 shadow-xl'>
                <div className='flex justify-between items-center'>
                    <Header category="Page" title='Meals' />
                    <Modal buttonContent={<div className='w-28 flex justify-between items-center'><BiPlus className='scale-125' /><span>Add Meal</span></div>} numStyle='five'>
                        <CoachAddMeal />
                    </Modal>
                </div>
                <div className='flex overflow-x-auto'>
                    {AllMeals?.meals?.map((meal) => (
                        <motion.div
                            key={meal.id}
                            className="bg-black border-1 border-black min-h-56 min-w-64 overflow-hidden rounded-xl m-5 card-effect"
                            initial={cardAnimation.initial}
                            whileInView={cardAnimation.whileInView}
                            transition={cardAnimation.transition}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="">
                                <img className='w-full h-52' src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${meal.image}`} alt={meal.name} />
                            </div>
                            <div className="p-4">
                                <strong className="flex justify-between font-extrabold mt-3">
                                    <span className='text-white '>
                                        {meal.name}
                                    </span>
                                    <a href="#MealDelete" className="no-underline text-blue-600"
                                        // onClick={() => console.log(`Meal ID: ${exercise.id}`)}
                                        onClick={() => handleDelete(meal.id)}  // Call handleDelete with exercise.id

                                    >
                                        <Delete className='text-red-500' />
                                    </a>
                                </strong>
                            </div>
                            <div className='grid grid-cols-2 '>
                                <div className='border-r-1 text-white flex flex-col justify-center items-center'>
                                    <p>calories: {meal.calories}</p>
                                    <p className='mt-2'>Protein: {meal.protein}</p>
                                    <p className='mt-2'>Sugar: {meal.sugar}</p>
                                </div>
                                <div className='text-white ml-1 '>
                                    <p className='flex'>Ingredient: </p>
                                    <div className='flex flex-wrap'>
                                        {meal.ingredients.map((imag) => (
                                            <img key={imag.id} src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${imag.image}`} alt='' className='rounded-2xl w-5 h-5 m-1' />
                                        ))}
                                    </div>
                                    {/* <p className='my-2 flex justify-center items-center'>Salt: {meal.salt}</p> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Toaster position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }} />
        </section>
    );
}

export default CoachContacts;
