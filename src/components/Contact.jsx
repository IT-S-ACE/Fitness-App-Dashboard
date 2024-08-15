import React, { useState } from 'react';
import { useAddCoachInfo } from '../hook/useAddCoachInfo';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Contact() {
  // Coach hook details
  const [coachName, setCoachName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [coachPrice, setCoachPrice] = useState('');//
  const [coachDescription, setCoachDescription] = useState('');//
  const [coachPassword, setCoachPassword] = useState('');//
  const [passwordConfirmation, setPasswordConfirmation] = useState('');//
  const [image, setImage] = useState(null);
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: addInfo } = useAddCoachInfo();

  const formData = new FormData();
  formData.append('price', coachPrice);
  formData.append('description', coachDescription);
  formData.append('password', coachPassword);
  formData.append('password_confirmation', passwordConfirmation);
  formData.append('image', image);
  formData.append('age', age);
  formData.append('bio', bio);

  const handleAddCoachInfo = (e) => {
    e.preventDefault();
    addInfo(formData);
  };

  return (
    <div id='contact' className='bg-black'>
      <h1>Enter Your Details :)</h1>
      <form>
        <input // price 
          type="text"
          placeholder='Price'
          value={coachPrice}
          onChange={(e) => setCoachPrice(e.target.value)}
          required
        />

        <textarea // description
          placeholder='Description'
          name='message'
          value={coachDescription}
          onChange={(e) => setCoachDescription(e.target.value)}
        ></textarea>

        <div style={{ position: 'relative', width: '100%' }}>
          <input // password
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={coachPassword}
            onChange={(e) => setCoachPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div style={{ position: 'relative', width: '100%' }}>
          <input // password confirmation
            type={showPassword ? 'text' : 'password'}
            placeholder='Password Confirmation'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <input
          type="file"
          accept='image/*' 
          onChange={(e) => setImage(e.target.files[0])}
        />

        <input // age
          type="number"
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <input // bio
          type="text"
          placeholder='BIO'
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />

        <button onClick={handleAddCoachInfo}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
