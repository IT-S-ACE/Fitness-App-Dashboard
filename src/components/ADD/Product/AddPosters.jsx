import React, { useState } from 'react'
import DargDrop from '../../Drag-Drop/DargDrop';
import { useAddNewPoster } from '../../../hook/useAddNewPoster';
import { ExitToApp } from '@mui/icons-material';
const AddPosters = ({ handleCloseModal }) => {
  const [image, setImage] = useState(null)

  const { mutate: addPoster } = useAddNewPoster()

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('image', image);

    addPoster(formData);
  };
  return (
    <>
      <div className="px-4 -mt-16 flex">
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl backdrop-filter bg-opacity-95">

          <div className='flex justify-between'>
            <div className="mb-5 border-b-2 border-gray-300 w-52">
              <p className="text-gray-400 flex">Form</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex justify-start">
                Add Poster
              </h1>
            </div>
            <button onClick={handleCloseModal}>  {/* Trigger handleCloseModal on click */}
              <ExitToApp />
            </button>
          </div>
          <div>
            <DargDrop setImage={setImage} />
          </div>
          <div className='flex justify-evenly items-center'>
            <button
              className="p-4 bg-black text-white rounded-xl mt-2 button-effect border-2 col-start-2 col-end-3"
              onClick={handleAddNewProduct}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPosters