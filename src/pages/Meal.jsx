import React from 'react'
import Modal from '../components/Modal'
import { Header } from '../components'
import AddArticle from '../components/ADD/AddArticle'
import { BiPlus } from 'react-icons/bi'
import IngredintImg from '../assets/profile.png'
import { Delete } from '@mui/icons-material'

import s1 from '../assets/image.png'
import s2 from '../assets/image-1.png'
import s3 from '../assets/profile.png'
import sEgg from '../assets/eggs-e1648216350119-500x500.jpeg'
import mealImage from '../assets/paella.jpg'
import AddIngredient from '../components/ADD/AddIngredient'
import AddMeal from '../components/ADD/AddMeal'
import { Toaster } from 'react-hot-toast'
import { useAllIngredientsData } from '../hook/useAllIngredientsData'
import { useAllMealsData } from '../hook/useAllMealsData'
import { useDeleteMeal } from '../hook/useDeleteMeal'
import { useDeleteIngredient } from '../hook/useDeleteIngredient'

const Meal = () => {
    const images = [
        { id: 1, img: s1 },
        { id: 2, img: s2 },
        { id: 3, img: s3 },
        { id: 4, img: sEgg },
    ]

    //Delete Meal
    const { mutate: deleteMeal } = useDeleteMeal()

    const handleDelete = (mealID) => {
        deleteMeal(mealID);
    };

    //Delete Ingredient
    const { mutate: deleteIngredient } = useDeleteIngredient()

    const handleDeleteIngredient = (ingredientID) => {
        deleteIngredient(ingredientID);
    };

    // All ingredients
    const { data: allIngredients } = useAllIngredientsData()
    // console.log(allIngredients)

    //All Meals
    const { data: AllMeals, error, isError } = useAllMealsData()
    if (isError) {
        console.log(error.message)
        return <div>Error: {error.message}</div>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            {/* Ingredients */}
            <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl w-1300 shadow-xl'>
                <div className='flex justify-between items-center'>
                    <Header category="SubPage" title='Ingredints' />
                    <Modal buttonContent={<div className='w-40 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Ingredient</span></div>} numStyle='two'>
                        <AddIngredient />
                    </Modal>
                </div>
                <div className='flex overflow-x-scroll'>
                    {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                            <>
                            <div key={id} className="bg-black border-1 border-black min-h-56 min-w-52 overflow-hidden w-80 rounded-xl m-5 card-effect">
                                <div className="">
                                    <img className='w-full' src={sEgg} alt="Minecraft" />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-white">Ingredient</p>
                                    <strong className="flex justify-between font-extrabold mt-3">
                                        <span className='text-white '>
                                            {id} - Nigga
                                        </span>
                                        <a href="#" className="no-underline text-blue-600">
                                            <Delete className='text-red-500' />
                                        </a>
                                    </strong>
                                </div>
                            </div>
                            </>
                        ))} */}
                    {allIngredients?.ingredient?.map((ing) => {
                        return <>
                            <div key={ing.id} className="bg-black border-1 border-black min-h-56 min-w-52 overflow-hidden w-80 rounded-xl m-5 card-effect">
                                <div className="">
                                    <img className='w-full h-52 ' src={`https://35c9-109-236-81-161.ngrok-free.app/Uploads/${ing.image}`} alt="Minecraft" />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-white">Ingredient</p>
                                    <strong className="flex justify-between font-extrabold mt-3">
                                        <span className='text-white '>
                                            {ing.id} - {ing.name}
                                        </span>
                                        <a href="#IngredientDelete" className="no-underline text-blue-600"
                                            // onClick={() => console.log(`Meal ID: ${exercise.id}`)}
                                            onClick={() => handleDeleteIngredient(ing.id)}  
                                        >
                                            <Delete className='text-red-500' />
                                        </a>
                                    </strong>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
            {/* Meals */}
            <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl w-1300 shadow-xl'>
                <div className='flex justify-between items-center'>
                    <Header category="Page" title='Meals' />
                    <Modal buttonContent={<div className='w-28 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Meal</span></div>} numStyle='one'>
                        <AddMeal />
                    </Modal>
                </div>
                <div className='flex flex-wrap w-full'>
                    {/*  */}
                    {AllMeals?.data?.map((meal) => {
                        return <>
                            <div key={meal.id} className="bg-black border-1 border-black min-h-56 w-64 overflow-hidden rounded-xl m-5 card-effect">
                                <div className="">
                                    <img className='w-full h-52' src={`https://35c9-109-236-81-161.ngrok-free.app/Uploads/${meal.image}`} alt="Minecraft" />
                                </div>
                                <div className="p-4">
                                    <strong className="flex justify-between font-extrabold mt-3">
                                        <span className='text-white '>
                                            {meal.id} - {meal.name}
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
                                        <p className='mt-2'>Protien: {meal.protein}</p>
                                        <p className='mt-2'>Sugar: {meal.sugar}</p>

                                    </div>
                                    <div className='text-white ml-1 '>
                                        <p className='flex'>ingredient: </p>
                                        <div className='flex flex-wrap max-h-14 overflow-hidden'>
                                            {meal.ingredients.map((imag) => {
                                                return (
                                                    <>
                                                        <img src={`https://35c9-109-236-81-161.ngrok-free.app/Uploads/${imag.image}`} alt='' className='rounded-2xl w-5 h-5 m-1' />
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <p className='my-2 flex justify-center items-center'>salt: {meal.salt}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                    {/*  */}
                </div>
            </div>
            <Toaster position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }} />
        </>
    )
}

export default Meal






////////////// Another Style for (( Ingredient Card ))

//  <div key={id} className="bg-black border-1 border-black h-69 min-w-52 overflow-hidden w-80 rounded-xl m-5 card-effect">
//                                 <div className="">
//                                     <img className='w-full h-48' src={IngredintImg} alt="Minecraft" />
//                                 </div>
//                                 <div className="p-4">
//                                     <p className="text-sm text-white">Ingredient</p>
//                                     <strong className="flex justify-between font-extrabold mt-3">
//                                         <span className='text-white '>
//                                             {id} - Nigga
//                                         </span>
//                                         <a href="#" className="no-underline text-blue-600">
//                                             <Delete className='text-red-500' />
//                                         </a>
//                                     </strong>
//                                 </div>
//                             </div> 