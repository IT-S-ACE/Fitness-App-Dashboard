import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAddPlan } from '../../../hook/Coach/useAddPlan'
import DropDown from '../../DropDown'
import { ExitToApp } from '@mui/icons-material';

const allTarget = [
    { id: 1, name: 'lose_weight' },
    { id: 2, name: 'build_muscle' },
    { id: 3, name: 'keep_fit' },
];
const allLevel = [
    { id: 1, name: 'beginner' },
    { id: 2, name: 'intermediate' },
    { id: 3, name: 'advanced' },
];

const allEquipment = [
    { id: 1, name: 'equipment' },
    { id: 2, name: 'no_equipment' },
];


const AddPlan = ({handleCloseModal}) => {
    const [plan_name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [target, setTarget] = useState('');
    const [level, setLevel] = useState('');
    const [choose, setChoose] = useState('');




    const { mutate: addPlan } = useAddPlan()

    const formData = new FormData()
    formData.append('plan_name', plan_name)
    formData.append('description', description)
    formData.append('target', target);
    formData.append('level', level);
    formData.append('choose', choose);

    const handleAddPlan = (e) => {
        e.preventDefault();
        // const plan = { plan_name, description }
        addPlan(formData);
    }

    return (
        <>
            <div>
                <div className='px-4   -mt-16 flex'>
                    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl backdrop-filter bg-opacity-95'>
                        
                        <div className='flex justify-between'>
                        <div className='mb-10'>
                            <p className='text-gray-400 flex'>
                                Form
                            </p>
                            <h1 className='text-3xl font-extrabold tracking-tight text-slate-900 flex justify-start'>
                                Add Plan
                            </h1>
                        </div>
                        <button onClick={handleCloseModal}>  {/* Trigger handleCloseModal on click */}
                            <ExitToApp />
                        </button>
                        </div>
                        
                        <div className='mt-6 grid grid-cols-2'>

                            <div>
                                <p className='flex'>Plan Name: </p>
                                <TextField
                                    className='input-body-row1-textfeild1-TextFeild'
                                    margin="dense"
                                    label="Plan Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={plan_name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className='ml-3'>
                                <p className="flex ml-2">Choose</p>
                                <div className="mt-2">
                                    <DropDown dropLabel="Choose" items={allEquipment} setSelectedLevel={setChoose} />
                                </div>
                            </div>
                            <div className='col-span-2 mt-5'>
                                <p className='flex'>Description: </p>
                                <TextField
                                    className='input-body-row1-textfeild1-TextFeild'
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />

                            </div>
                            <div className='m-2'>
                                <p className="flex ml-2">Target</p>
                                <div className="mt-2">
                                    <DropDown dropLabel="Target" items={allTarget} setSelectedLevel={setTarget} />
                                </div>
                            </div>
                            <div className='m-2'>
                                <p className="flex ml-2">Level</p>
                                <div className="mt-2">
                                    <DropDown dropLabel="Level" items={allLevel} setSelectedLevel={setLevel} />
                                </div>
                            </div>
                            
                            <div className='flex justify-end items-center translate-x-24'>
                                <button className='p-4 bg-black text-white rounded-xl mt-2 button-effect border-2 w-52'
                                    onClick={handleAddPlan}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPlan