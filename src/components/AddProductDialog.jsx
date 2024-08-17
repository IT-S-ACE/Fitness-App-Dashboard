// import React, { useState } from 'react'
// import { useAddNewCoachData } from '../hook/useAddNewCoach';
// import Button from './Button';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, useMediaQuery, useTheme } from '@mui/material';
// import Modal from './Modal';
// import { BiPlus } from 'react-icons/bi';
// import AddProduct from './ADD/AddProduct';
// import { Toaster } from 'react-hot-toast';
// import { useStateContext } from '../contexts/ContextProvider';
// import AddFood from './ADD/AddFood';

// const categoryImages = [
//     'ProductCategory/Clothes.png',
//     'ProductCategory/Food.png',
//     'ProductCategory/SportsEquipment.png'
// ]

// const AddProductDialog = () => {
//     const { currentColor } = useStateContext();

//     const theme = useTheme();
//     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//     const [open, setOpen] = useState(false);
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <Button
//                 variant="outlined"
//                 color="white"
//                 bgColor={currentColor}
//                 text="Add"
//                 borderRadius="10px"
//                 customFunc={handleClickOpen}
//             />
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 PaperProps={{
//                     component: 'form',
//                     sx: {
//                         width: fullScreen ? '100%' : '1000px', // Responsive width
//                         maxWidth: '1000px', // Ensure the dialog doesn't exceed 1000px
//                     },
//                     onSubmit: (event) => {
//                         event.preventDefault();
//                         const formData = new FormData(event.currentTarget);
//                         const formJson = Object.fromEntries(formData.entries());
//                         const email = formJson.email;
//                         console.log(email);
//                         handleClose();
//                     },
//                 }}
//             >
//                 <DialogTitle>Select Product Category : </DialogTitle>
//                 <DialogContent>
//                     {/* <DialogContentText>
//                         To subscribe to this website, please enter your email address here. We
//                         will send updates occasionally.
//                     </DialogContentText> */}

//                     <div className='flex justify-evenly'>
//                         <div className='m-1' key={1}>
//                             <img src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${categoryImages[0]}`} alt="" className='h-48 w-full bg-cover' />
//                             <Modal buttonContent={<div className='w-32 flex justify-between items-center'> <BiPlus className='scale-125'/> <span>Add Clothe</span></div>} numStyle='one'>
//                                 <AddFood />
//                             </Modal>
//                         </div>
//                         <div className='m-1 ' key={2}>
//                             <img src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${categoryImages[1]}`} alt="" className='h-48 w-full bg-cover'/>
//                             <Modal buttonContent={<div className='w-32 flex justify-between items-center'> <BiPlus className='scale-125'/> <span>Add Food</span></div>} numStyle='one'>
//                                 <AddProduct />
//                             </Modal>
//                         </div>
//                         <div className='m-1' key={3}> 
//                             <img src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${categoryImages[2]}`} alt="" className='h-48 w-full bg-cover'/>
//                             <Modal buttonContent={<div className='w-44 flex justify-between items-center'> <BiPlus className='scale-125'/> <span>Add Equipment</span></div>} numStyle='one'>
//                                 <AddProduct />
//                             </Modal>
//                         </div>
//                     </div>
//                 </DialogContent>
//                 <DialogActions>
//                     {/* <Modal buttonContent={<div className='w-32 flex justify-between items-center'><BiPlus className='scale-125' /> <span>Add Product</span></div>} numStyle='one'>
//                         <AddProduct />
//                     </Modal>
//                     <Button
//                         variant="outlined"
//                         color="white"
//                         bgColor="rgb(150 , 0 , 0)"
//                         text="Cancel"
//                         borderRadius="10px"
//                         customFunc={handleClose}
//                         className='hover:bg-white hover:border-red-600'
//                     />
//                     <Button
//                         variant="outlined"
//                         color="white"
//                         bgColor={currentColor}
//                         text="Subscribe"
//                         borderRadius="10px"
//                         customFunc={() => { }}
//                     /> */}
//                 </DialogActions>
//             </Dialog>
//             <Toaster />
//         </React.Fragment>

//     )
// }

// export default AddProductDialog








// import React, { useState } from 'react';
// import { useAddNewCoachData } from '../hook/useAddNewCoach';
// import Button from './Button';
// import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
// import Modal from './Modal';
// import { BiPlus } from 'react-icons/bi';
// import AddProduct from './ADD/AddProduct';
// import { Toaster } from 'react-hot-toast';
// import { useStateContext } from '../contexts/ContextProvider';
// import { useTheme } from '@mui/material/styles';

// const categoryImages = [
//     'ProductCategory/Clothes.png',
//     'ProductCategory/Food.png',
//     'ProductCategory/SportsEquipment.png'
// ];

// const AddProductDialog = () => {
//     const { currentColor } = useStateContext();
//     const [open, setOpen] = useState(false);
//     const theme = useTheme();
//     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <Button
//                 variant="outlined"
//                 color="white"
//                 bgColor={currentColor}
//                 text="Add"
//                 borderRadius="10px"
//                 customFunc={handleClickOpen}
//             />
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 PaperProps={{
//                     component: 'form',
//                     sx: {
//                         width: fullScreen ? '100%' : '1000px', // Responsive width
//                         maxWidth: '1000px', // Ensure the dialog doesn't exceed 1000px
//                     },
//                     onSubmit: (event) => {
//                         event.preventDefault();
//                         const formData = new FormData(event.currentTarget);
//                         const formJson = Object.fromEntries(formData.entries());
//                         const email = formJson.email;
//                         console.log(email);
//                         handleClose();
//                     },
//                 }}
//                 fullScreen={fullScreen}
//             >
//                 <DialogTitle>Select Product Category :</DialogTitle>
//                 <DialogContent>
//                     <div className='flex justify-evenly'>
//                         {categoryImages.map((src, index) => (
//                             <div key={index} className='m-1'>
//                                 <img src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${src}`} alt="" className='h-48 w-full bg-cover' />
//                                 <Modal buttonContent={
//                                     <div className='w-32 flex justify-between items-center'>
//                                         <BiPlus className='scale-125' />
//                                         <span>Add {['Clothe', 'Food', 'Equipment'][index]}</span>
//                                     </div>
//                                 } numStyle='one'>
//                                     <AddProduct />
//                                 </Modal>
//                             </div>
//                         ))}
//                     </div>
//                 </DialogContent>
//                 <DialogActions>
//                     {/* Add your DialogActions content here if needed */}
//                 </DialogActions>
//             </Dialog>
//             <Toaster />
//         </React.Fragment>
//     );
// };

// export default AddProductDialog;




// AddProductDialog.jsx
import React, { useState } from 'react';
import Button from './Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import Modal from './Modal';
import { BiPlus } from 'react-icons/bi';
import { Toaster } from 'react-hot-toast';
import { useStateContext } from '../contexts/ContextProvider';
import AddClothes from './ADD/AddClothes';
import AddFood from './ADD/AddFood';
import AddEquipment from './ADD/AddEquipment';

const categoryImages = [
  'ProductCategory/Clothes.png',
  'ProductCategory/Food.png',
  'ProductCategory/SportsEquipment.png'
];

const AddProductDialog = () => {
  const { currentColor } = useStateContext();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="white"
        bgColor={currentColor}
        text="Add"
        borderRadius="10px"
        customFunc={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          sx: {
            width: fullScreen ? '100%' : '1000px', // Responsive width
            maxWidth: '1000px', // Ensure the dialog doesn't exceed 1000px
          },
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Select Product Category : </DialogTitle>
        <DialogContent>
          <div className='flex justify-evenly'>
            <div className='m-1' key={0}>
              <img src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${categoryImages[0]}`} alt="" className='h-48 w-full bg-cover' />
              <Modal buttonContent={<div className='w-32 flex justify-between items-center'><BiPlus className='scale-125' /> <span>Add Clothes</span></div>} numStyle='one'>
                <AddClothes />
              </Modal>
            </div>
            <div className='m-1' key={1}>
              <img src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${categoryImages[1]}`} alt="" className='h-48 w-full bg-cover' />
              <Modal buttonContent={<div className='w-32 flex justify-between items-center'><BiPlus className='scale-125' /> <span>Add Food</span></div>} numStyle='one'>
                <AddFood />
              </Modal>
            </div>
            <div className='m-1' key={2}>
              <img src={`https://ae3b-46-213-123-22.ngrok-free.app/Uploads/${categoryImages[2]}`} alt="" className='h-48 w-full bg-cover' />
              <Modal buttonContent={<div className='w-44 flex justify-between items-center'><BiPlus className='scale-125' /> <span>Add Equipment</span></div>} numStyle='one'>
                <AddEquipment />
              </Modal>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {/* Custom actions can go here */}
        </DialogActions>
      </Dialog>
      <Toaster />
    </React.Fragment>
  );
}

export default AddProductDialog;
