import React, { useState } from 'react'
import { useAddNewExercise } from '../../hook/useAddNewExercise';
import { TextField } from '@mui/material';
import DropDownID from '../DropDownID';
import NumSlider from '../NumSlider';
import DropDown from '../DropDown';
import DargDrop from '../DargDrop';

import abs from '../../assets/focusArea/014-human.png';
import chest from '../../assets/focusArea/007-gym.png';
import shoulder from '../../assets/focusArea/006-shoulder.png';
import biceps from '../../assets/focusArea/015-biceps.png';
import triceps from '../../assets/focusArea/013-muscles-1.png';
import quadriceps from '../../assets/focusArea/008-front.png';
import hamstring from '../../assets/focusArea/002-back.png';
import glutes from '../../assets/focusArea/016-muscles-2.png';
import calves from '../../assets/focusArea/003-muscles.png';
import back from '../../assets/focusArea/012-back-4.png';
import CheckBox from '../CheckBox';
import { useAllCategoryData } from '../../hook/useAllCategoryData';


const allFocusArea = [
    { id: 1, name: 'abs', image: abs },
    { id: 2, name: 'chest', image: chest },
    { id: 3, name: 'shoulder', image: shoulder },
    { id: 4, name: 'biceps', image: biceps },
    { id: 5, name: 'triceps', image: triceps },
    { id: 6, name: 'quadriceps', image: quadriceps },
    { id: 7, name: 'hamstring', image: hamstring },
    { id: 8, name: 'glutes', image: glutes },
    { id: 9, name: 'calves', image: calves },
    { id: 10, name: 'back', image: back },
  ];
  
  const allMuscleArea = [
    { id: 1, name: 'CHEST' },
    { id: 1, name: 'ARM' },
    { id: 1, name: 'LEG' },
    { id: 1, name: 'ABS' },
    { id: 1, name: 'SHOULDER&Back' },
  ];
  
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
  
  const allDiseases = [
    { id: 1, name: 'heart' },
    { id: 2, name: 'knee' },
    { id: 3, name: 'breath' },
    { id: 4, name: 'blood pressure' },
    { id: 5, name: 'diabetes' },
  ];
  
  const allGenders = [
    { id: 1, name: 'male' },
    { id: 2, name: 'female' },
  ];
  
  const allDays = [
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursday' },
    { id: 6, name: 'Friday' },
    { id: 7, name: 'Saturday' },
  ];

const AddExercise = () => {
  const [name, setName] = useState('');
  const [muscle, setMuscle] = useState('');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState(0);
  const [time, setTime] = useState('');
  const [reps, setReps] = useState(0);
  const [videoLink, setVideoLink] = useState('');
  const [gif, setGif] = useState(null);
  const [target, setTarget] = useState('');
  const [level, setLevel] = useState('');
  const [gender, setGender] = useState('');
  const [choose, setChoose] = useState('');
  const [category, setCategory] = useState([]);
  const [diseases, setDiseases] = useState('');
  const [focusArea, setFocusArea] = useState([]);

  const { mutate: addExercise } = useAddNewExercise();

  const handleCheckboxChange = (id) => {
    setFocusArea((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((item) => item !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const handleCATEGORYCheckbox = (id) => {
    setCategory((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((item) => item !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const handleAddNewExercise = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('exercise_name', name);
    formData.append('muscle[0]', muscle);
    formData.append('description', description);
    formData.append('calories', calories);
    formData.append('gif', gif);
    formData.append('time', time);
    formData.append('reps', reps);
    formData.append('video_link', videoLink);
    formData.append('target', target);
    formData.append('level', level);
    formData.append('gender', gender);
    formData.append('choose', choose);
    formData.append('diseases', diseases);

    // Append the checked focus areas
    focusArea.forEach((id, index) => {
      formData.append(`focus_area[${index}]`, id);
    });

    category.forEach((id, index) => {
      formData.append(`category[${index}]`, id);
    });

    // Logging formData
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    addExercise(formData);
  };


  const {data : allCategory} = useAllCategoryData()

  return (
    <>
      <div className="px-4 -mt-24 flex">
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl backdrop-filter bg-opacity-95">
          <div className="mb-5 border-b-1 border-gray-300 w-48">
            <p className="text-gray-400 flex">Form</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex justify-start">
              Add Exercise
            </h1>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1">
            <div className="grid grid-cols-2 gap-1 mr-2 border-r-2 pr-2 border-black">
              <div className="mr-1">
                <p className="flex">Exercise Name :</p>
                <TextField
                  className="input-body-row1-textfeild1-TextFeild"
                  margin="dense"
                  label="Exercise Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <p className="flex ml-2">Muscle</p>
                <div className="mt-2">
                  <DropDownID dropLabel="Muscle" items={allMuscleArea} setSelectedID={setMuscle} />
                </div>
              </div>
              <div>
                <NumSlider Label="Calories" value={calories} onChange={setCalories} />
              </div>
              <div className="mr-1">
                <p className="flex">Description :</p>
                <TextField
                  className="input-body-row1-textfeild1-TextFeild"
                  margin="dense"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <p className="flex ml-2">Target</p>
                <div className="mt-2">
                  <DropDown dropLabel="Target" items={allTarget} setSelectedLevel={setTarget} />
                </div>
              </div>
              <div className="pl-8">
                <NumSlider Label="Reps" value={reps} onChange={setReps} maxLength={`${12}`}/>
              </div>

              <div>
                <DargDrop setImage={setGif} />
              </div>
              <div className="border-2 border-gray-700 rounded-xl h-340 overflow-y-scroll">
                {allCategory?.data?.map((categ) => (
                  <div key={categ.id} className="px-5 cursor-pointer flex justify-between border-2 border-gray-500 rounded-xl m-2 bg-gray-300" onClick={() => handleCATEGORYCheckbox(categ.id)}>
                    <div className='flex font-extrabold my-2'>
                      <img src={`https://48c4-146-70-246-155.ngrok-free.app/Uploads/${categ.image}`} alt="Category" className='w-10 h-10 rounded-full'/>
                      <span className="ml-2 text-xl">{categ.category_name}</span>
                    </div>
                    <strong className="mt-3">
                      <div>
                        <CheckBox onChange={() => handleCATEGORYCheckbox(categ.id)} checked={category.includes(categ.id)} />
                      </div>
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1">
              <div>
                <p className="flex ml-2">Choose</p>
                <div className="mt-2">
                  <DropDown dropLabel="Choose" items={allEquipment} setSelectedLevel={setChoose} />
                </div>
              </div>

              <div>
                <p className="flex ml-2">Gender</p>
                <div className="mt-2">
                  <DropDown dropLabel="Gender" items={allGenders} setSelectedLevel={setGender} />
                </div>
              </div>

              <div className="mr-4">
                <p className="flex">Video Link :</p>
                <TextField
                  className="input-body-row1-textfeild1-TextFeild"
                  margin="dense"
                  label="Video Link"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
              </div>
              <div className="pl-8">
                <NumSlider Label="Time" value={time} onChange={setTime} />
              </div>

              <div>
                <p className="flex ml-2">Level</p>
                <div className="mt-2">
                  <DropDown dropLabel="Level" items={allLevel} setSelectedLevel={setLevel} />
                </div>
              </div>

              <div>
                <p className="flex ml-2">Diseases</p>
                <div className="mt-2">
                  <DropDown dropLabel="Diseases" items={allDiseases} setSelectedLevel={setDiseases} />
                </div>
              </div>

              <div className="col-span-2 border-1 rounded-3xl shadow-2xl flex overflow-x-scroll h-64">
                {allFocusArea.map((focus) => (
                  <div
                    key={focus.id}
                    className="bg-gray-500 border-1 border-black min-h-52 min-w-52 overflow-hidden rounded-xl m-2 card-effect"
                    onClick={() => handleCheckboxChange(focus.id)}
                  >
                    <div>
                      <img className="h-40 w-48" src={focus.image} alt={focus.name} />
                    </div>
                    <div className="px-5">
                      <strong className="flex justify-between font-extrabold mt-3">
                        <span className="text-white text-xl">{focus.name}</span>
                        <div>
                          <CheckBox onChange={() => handleCheckboxChange(focus.id)} checked={focusArea.includes(focus.id)} />
                        </div>
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="p-4 bg-black text-white rounded-xl mt-2 button-effect border-2 col-start-2 col-end-3 -translate-x-44"
                onClick={handleAddNewExercise}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddExercise