import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { useAddNewChallenge } from '../../hook/useAddNewChallenge';
import DropDown from '../DropDown';
import { ExitToApp } from '@mui/icons-material';

const challengeType = [
  {id : 1 , name : 'timer'},
  {id : 2 , name : 'counter'},
]

const AddChallenge = ({handleCloseModal}) => {
  const [challengeName, setChallengeName] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);
  const [secondryImage, setSecondryImage] = useState(null);
  const [gif, setGif] = useState(null);

  const { mutate: addChallenge } = useAddNewChallenge();

  const formData = new FormData();
  formData.append('challenge_name', challengeName);
  formData.append('type', type);
  formData.append('image', image);
  formData.append('secondry_image', secondryImage);
  formData.append('gif', gif);

  const handleAddChallenge = (e) => {
    e.preventDefault();
    addChallenge(formData);
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
                                Add Challenge
                            </h1>
                        </div>
                        <button onClick={handleCloseModal}>  {/* Trigger handleCloseModal on click */}
                            <ExitToApp />
                        </button>
                        </div>
          <div className='mt-6'>

            <div className='grid grid-cols-2 gap-1'>
              <div>
                <p className='flex'>Challenge Name: </p>
                <TextField
                  className='input-body-row1-textfeild1-TextFeild'
                  margin="dense"
                  label="Challenge Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={challengeName}
                  onChange={e => setChallengeName(e.target.value)}
                />
              </div>
              <div>
                <p className='flex'> Type: </p>
                <DropDown dropLabel='Type' setSelectedLevel={setType} items={challengeType}/>
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
              <div>
                <p className='flex'>Secondury Image: </p>
                <TextField
                  className='input-body-row1-textfeild1-TextFeild'
                  margin="dense"
                  type="file"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setSecondryImage(e.target.files[0])}
                />
              </div>
              <div>
                <p className='flex'>Gif: </p>
                <TextField
                  className='input-body-row1-textfeild1-TextFeild'
                  margin="dense"
                  type="file"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setGif(e.target.files[0])}
                />
              </div>
              <div className='flex justify-end items-center'>
                <button className='p-4 bg-black text-white rounded-xl mt-2 button-effect border-2'
                  onClick={handleAddChallenge}
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

export default AddChallenge
