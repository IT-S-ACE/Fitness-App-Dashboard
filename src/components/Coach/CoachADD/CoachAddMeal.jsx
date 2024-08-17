import React, { useState } from 'react'
import CheckBox from '../../CheckBox'
import DropDown from '../../DropDown'
import DropDownID from '../../DropDownID'
import NumSlider from '../../NumSlider'
import DargDrop from '../../DargDrop'
import { TextField } from '@mui/material'
import { useCoachAllingredientsData } from '../../../hook/Coach/useCoachAllingredientsData'
import { useCoachAddMeal } from '../../../hook/Coach/useCoachAddMeal'
import { useStateContext } from '../../../contexts/ContextProvider'

const mealCategory = [
    { id: 1, name: 'breakfast' },
    { id: 2, name: 'lunch' },
    { id: 3, name: 'dinner' },
    { id: 4, name: 'snack' },
]

const mealTarget = [
    { id: 1, name: 'build muscle' },
    { id: 2, name: 'lose weight' },
    { id: 3, name: 'keep fit' },
]

const mealType = [
    { id: 1, name: 'vegetarian' },
    { id: 2, name: 'sugar free' },
    { id: 3, name: 'none' },
]

const allDays = [
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursday' },
    { id: 6, name: 'Friday' },
    { id: 7, name: 'Saturday' },
];



const CoachAddMeal = () => {

    // Meal Info
    const [mealName, setMealName] = useState('')
    const [mealCalories, setMealCalories] = useState(64)
    const [mealPortion, setMealPortion] = useState(14)
    const [mealDescription, setMealDescription] = useState('')
    const [mealSugar, setMealSugar] = useState(22)
    const [mealSalt, setMealSalt] = useState(23)
    const [mealImage, setMealImage] = useState(null)
    const [mealIngredients, setMealIngredients] = useState([])
    const [mealPreparation, setMealPreparation] = useState('')
    const [Target, setMealTarget] = useState('')
    const [Type, setMealType] = useState('')
    const [CategoryName, setCategoryName] = useState('')
    const [dayID, setDayID] = useState('');
    // const [coachID , setCoachID] = useState('')


    // coach ID from usEContextt
    const { coachID } = useStateContext()

    console.log(coachID)
    //Mutation Codee
    const { mutate: AddNewMeal } = useCoachAddMeal();

    const handleCheckboxChange = (id) => {
        setMealIngredients(prevState => {
            if (prevState.includes(id)) {
                return prevState.filter(item => item !== id);
            } else {
                return [...prevState, id];
            }
        });
    };

    const handleDAYcheckBox = (id) => {
        setDayID((prevState) => {
            if (prevState.includes(id)) {
                return prevState.filter((item) => item !== id);
            } else {
                return [...prevState, id];
            }
        });
    };

    const handleAddNewMeal = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', mealName)//
        formData.append('calories', mealCalories)//
        formData.append('protein', mealPortion)//
        formData.append('description', mealDescription)//
        // formData.append('sugar', mealSugar)
        // formData.append('salt', mealSalt)
        formData.append('image', mealImage)//
        formData.append('preparation_method', mealPreparation)//
        formData.append('target', Target)//
        formData.append('type', Type)//
        formData.append('categoryName', CategoryName)//
        formData.append('day_id', dayID)//

        // formData.append('coach_id', coachID) // pass the coach id hereee

        mealIngredients.forEach((id, index) => {
            formData.append(`ingredients[${index}]`, id)//
        });

        // dayID.forEach((id, index) => {
        //     formData.append(`day_id[${index}]`, id);
        // });

        // Logging formData
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        AddNewMeal(formData);
    }

    // Fetch all ingredients and display it to select and send it to the server
    const { data: allIngredients } = useCoachAllingredientsData()
    // console.log(allIngredients)

    return (
        <>
            <div className='px-4 -mt-28 flex'>
                <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl backdrop-filter bg-opacity-95 '>
                    <div className='mb-5 border-b-1 border-gray-300 w-40 '>
                        <p className='text-gray-400 flex'>
                            Form
                        </p>
                        <h1 className='text-3xl font-extrabold tracking-tight text-slate-900 flex justify-start'>
                            Add Meal
                        </h1>
                    </div>
                    {/* <div className='flex '> */}
                    <div className="mt-2 grid grid-cols-2 gap-1">
                        <div className='mt-2 grid grid-cols-2 gap-1 mr-2 border-r-2 pr-2 border-black'>
                            <div >
                                <p className='flex'>Meal Name</p>
                                <TextField
                                    className='input-body-row1-textfeild1-TextFeild'
                                    margin="dense"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={mealName}
                                    onChange={e => setMealName(e.target.value)}
                                />
                            </div>
                            <div >
                                <p className='flex'>Preparation Method</p>
                                <TextField
                                    className='input-body-row1-textfeild1-TextFeild'
                                    margin="dense"
                                    label="Preparation Method"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={mealPreparation}
                                    onChange={e => setMealPreparation(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className='flex text-white'>Day</p>
                                <div className='mt-2'>
                                    <DropDownID dropLabel='Day' items={allDays} setSelectedID={setDayID} />
                                </div>
                            </div>

                            <div>
                                <p className='flex text-white'>Target</p>
                                <div className='mt-2'>
                                    <DropDown dropLabel='Target' items={mealTarget} setSelectedLevel={setMealTarget} />
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='flex'>Description</p>
                                <TextField
                                    className='input-body-row1-textfeild1-TextFeild'
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={mealDescription}
                                    onChange={e => setMealDescription(e.target.value)}
                                />
                            </div>

                            <div className='col-span-2'>
                                <DargDrop setImage={setMealImage} />
                            </div>




                            {/* <div className="border-2 border-gray-700 rounded-xl overflow-y-scroll">
                                {allDays.map((day) => (
                                    <div key={day.id} className="px-5 cursor-pointer" onClick={() => handleDAYcheckBox(day.id)}>
                                        <strong className="flex justify-between font-extrabold mt-3">
                                            <span className="text-2xl">{day.name}</span>
                                            <div>
                                                <CheckBox onChange={() => handleDAYcheckBox(day.id)} checked={dayID.includes(day.id)} />
                                            </div>
                                        </strong>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                        <div className=''>
                            <div className='mt-4 grid grid-cols-2 gap-3'>
                                {/* <div>
                                    <NumSlider Label='Sugar' value={mealSugar} onChange={setMealSugar} />
                                </div>
                                <div>
                                    <NumSlider Label='Salt' value={mealSalt} onChange={setMealSalt} />
                                </div> */}
                                <div>
                                    <NumSlider Label='Calories' value={mealCalories} onChange={setMealCalories} />
                                </div>
                                <div>
                                    <NumSlider Label='Protein' value={mealPortion} onChange={setMealPortion} />
                                </div>
                                <div >
                                    <p className='flex text-white'>Target</p>
                                    <div className='mt-2'>
                                        <DropDown dropLabel='Meal Category' items={mealCategory} setSelectedLevel={setCategoryName} />
                                    </div>
                                </div>
                                <div>
                                    <p className='flex text-white'>Target</p>
                                    <div className='mt-2'>
                                        <DropDown dropLabel='Meal Type' items={mealType} setSelectedLevel={setMealType} />
                                    </div>
                                </div>
                                <div className='col-span-2 border-1 rounded-3xl shadow-2xl flex flex-wrap overflow-y-scroll h-96 w-700'>
                                    {allIngredients?.ingredient?.map((ing) => {

                                        return (
                                            <div key={ing.id} className="bg-gray-500 border-1 border-black overflow-hidden w-auto rounded-xl m-3 card-effect hover:cursor-pointer h-64"
                                                onClick={() => handleCheckboxChange(ing.id)}>
                                                <div className="">
                                                    <img className='h-48 w-48' src={`https://35c9-109-236-81-161.ngrok-free.app/Uploads/${ing.image}`} alt={ing.name} />
                                                </div>
                                                <div className=" px-5">
                                                    <strong className="flex justify-between font-extrabold mt-3">
                                                        <span className='text-white text-sm'>
                                                            {ing.name}
                                                        </span>
                                                        <div className="">
                                                            <CheckBox onChange={() => handleCheckboxChange(ing.id)} checked={mealIngredients.includes(ing.id)} />
                                                        </div>
                                                    </strong>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <button className='p-4 bg-black text-white rounded-xl mt-2 button-effect border-2 col-start-2 col-end-3 -translate-x-44 '
                                    onClick={handleAddNewMeal}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default CoachAddMeal