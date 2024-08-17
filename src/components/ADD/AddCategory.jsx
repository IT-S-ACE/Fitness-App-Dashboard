import React, { useState } from 'react'
import { useAddNewCategory } from '../../hook/useAddNewCategory';
import { TextField } from '@mui/material';
import DargDrop from '../DargDrop'
import { ExitToApp } from '@mui/icons-material';

const AddCategory = ({handleCloseModal}) => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [menImage, setMenImage] = useState(null);
  const [image, setImage] = useState(null);
  const [womenImage, setWomenImage] = useState(null);

  const { mutate: addCategory } = useAddNewCategory();

  const formData = new FormData();
  formData.append('category_name', categoryName);
  formData.append('description', description);
  formData.append('men_image', menImage);
  formData.append('image', image);
  formData.append('women_image', womenImage);

  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategory(formData);
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
                                Add Ingredient
                            </h1>
                        </div>
                        <button onClick={handleCloseModal}>  {/* Trigger handleCloseModal on click */}
                            <ExitToApp />
                        </button>
                        </div>
          <div className='mt-6'>

            <div className='grid grid-cols-2 gap-1'>
              <div>
                <p className='flex'>Category Name: </p>
                <TextField
                  className='input-body-row1-textfeild1-TextFeild'
                  margin="dense"
                  label="Category Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={categoryName}
                  onChange={e => setCategoryName(e.target.value)}
                />
              </div>
              <div>
                <p className='flex'> Description: </p>
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
              <div>
                <p className='flex'>Men Image: </p>
                <TextField
                  className='input-body-row1-textfeild1-TextFeild'
                  margin="dense"
                  type="file"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setMenImage(e.target.files[0])}
                />
              </div>
              <div>
                <p className='flex'>Women Image: </p>
                <TextField
                  className='input-body-row1-textfeild1-TextFeild'
                  margin="dense"
                  type="file"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setWomenImage(e.target.files[0])}
                />
              </div>
              <div>
                <p className='flex'>Image: </p>
                <TextField
                  className='input-body-row1-textfeild1-TextFeild'
                  margin="dense"
                  type="file"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className='flex justify-end items-center'>
                <button className='p-4 bg-black text-white rounded-xl mt-2 button-effect border-2'
                  onClick={handleAddCategory}
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

export default AddCategory