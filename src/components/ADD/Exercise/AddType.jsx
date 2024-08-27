import React, { useState } from 'react'
import { useAddNewType } from '../../../hook/useAddNewType'
import { TextField } from '@mui/material'
import DargDrop from '../../Drag-Drop/DargDrop'
import { ExitToApp } from '@mui/icons-material'

const AddType = ({handleCloseModal}) => {
    const [name, setName] =useState('')
    const [description, setDescription] =useState('')
    const [image , setImage] = useState(null)

    const {mutate : addType} = useAddNewType();

    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('image', image)

    const handleAddType = (e) => {
        e.preventDefault();
        addType(formData);
    }

    return (
        <>
            <div className='px-4   -mt-16 flex'>
                <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl backdrop-filter bg-opacity-95'>
                    
                    <div className='flex justify-between'>
                    <div className='mb-10'>
                        <p className='text-gray-400 flex'>
                            Form
                        </p>
                        <h1 className='text-3xl font-extrabold tracking-tight text-slate-900 flex justify-start'>
                            Add Type
                        </h1>
                    </div>
                        <button onClick={handleCloseModal}>  {/* Trigger handleCloseModal on click */}
                            <ExitToApp />
                        </button>
                        </div>
                    <div className='mt-6'>

                        <div>
                            <p className='flex'>Type Name: </p>
                            <TextField
                                className='input-body-row1-textfeild1-TextFeild'
                                margin="dense"
                                label="Type Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
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
                        <div className='col-span-2 mt-5'>
                            
                            <DargDrop setImage={setImage}/>
                        </div>
                        <div className='flex justify-end items-center'>
                        <button className='p-4 bg-black text-white rounded-xl mt-2 button-effect border-2'
                        onClick={handleAddType}
                        >
                            Add
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddType
