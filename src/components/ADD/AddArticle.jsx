import React, { useState } from 'react'
import DargDrop from '../DargDrop'
import { TextField } from '@mui/material'
import aritcleLogo from '../../assets/image.png'
import Button from '../Button'
import Header from '../Header'
import TextFeildUi from '../TextFeildUi'
import { ExitToApp } from '@mui/icons-material'

const AddArticle = ({handleCloseModal}) => {
    const [image, setImage] = useState(null)
    return (
        <>

            <div className='px-4 -mt-16 flex'>
            {/* <div className='input-all'>
                    <div className='input-header'>
                        <img src={aritcleLogo} alt="" />
                        <div className='pl-5'>
                            <h4>Add Article</h4>
                            <p>Enter the Detail of the Article</p>
                        </div>
                    </div>
                    <div className='input-body'>


                        <div className='flex justify-between items-center text-xl pt-2'>

                            <div className='w-760'>
                                <TextField
                                    margin="dense"
                                    label="Author Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center text-xl pt-2'>
                            <div className='w-760'>
                                <p className='text-black'>samer</p>
                                <TextField
                                    margin="dense"
                                    label="Title"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center text-xl pt-2'>

                            <div className='w-760'>
                                <TextField
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                // className=''
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center text-xl pt-2'>

                            <div className='w-760 flex justify-center'>
                                <DargDrop
                                // setImage={setImage} 
                                />
                            </div>
                        </div>
                        <div className='flex justify-end items-end mt-3'>
                            <Button
                                bgColor='linear-gradient(60deg, #ab47bc, #8e24aa)'
                                borderRadius='10px'
                                size='md'
                                text='ADD'
                                color='white'
                            />
                        </div>
                    </div>
                </div> */}

            {/* sytle 2 */}
            <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl backdrop-filter bg-opacity-95'>
            <div className='flex justify-between'>
                        <div className='mb-10'>
                            <p className='text-gray-400 flex'>
                                Form
                            </p>
                            <h1 className='text-3xl font-extrabold tracking-tight text-slate-900 flex justify-start'>
                                Add Article
                            </h1>
                        </div>
                        <button onClick={handleCloseModal}>  {/* Trigger handleCloseModal on click */}
                            <ExitToApp />
                        </button>
                        </div>
                    <div className='mt-6 grid grid-cols-2 gap-4'>   

                        <div>
                            <p className='flex'>Auther Name</p>
                            <TextField
                                className='input-body-row1-textfeild1-TextFeild'
                                margin="dense"
                                label="Challenge Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <p className='flex'>Title</p>
                            <TextField
                                className='input-body-row1-textfeild1-TextFeild'
                                margin="dense"
                                label="Challenge Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                        <div className='col-span-2'>
                            <p className='flex'>Description</p>
                            <TextField
                                className='input-body-row1-textfeild1-TextFeild'
                                margin="dense"
                                label="Challenge Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                        <div className='col-span-2 '>
                            <DargDrop />
                        </div>
                    </div>
                </div>
                    {/* <div className='w-400 h-400 bg-cover bg-dashboard-1 bg bg-no-repeat mt-56'/> */}

                    {/* FormUi Style */}
            {/* <div className='form-ui'>
                <div className='div-form-ui'>
                    <span className='span-of-form-ui'>Add Article</span>
                </div>
                <form className='main-form-ui'>
                    <div className='div-main-form-ui'>
                        <div className='Feild-From-ui'>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='div-Feild-From-ui'>
                                    <div className='Head-Feild-form-ui'>
                                        <label> First name:</label>
                                    </div>
                                    <div className='Body-Feild-form-ui'>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='div-Feild-From-ui'>
                                    <div className='Head-Feild-form-ui'>
                                        <label> First name:</label>
                                    </div>
                                    <div className='Body-Feild-form-ui'>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <TextFeildUi label='Description' />
                                </div>
                                <div className='col-span-2'>
                                    <label className='text-white font-extrabold flex justify-start items-center'>Image</label>
                                    <DargDrop setImage={setImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
            </div>
        </>
    )
}

export default AddArticle