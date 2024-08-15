import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAddNewCoachData } from '../hook/useAddNewCoach'
import Button from './Button'
import { useStateContext } from '../contexts/ContextProvider'
import { Toaster } from 'react-hot-toast'
import Modal from './Modal'
import AddProduct from './ADD/AddProduct'
import { BiPlus } from 'react-icons/bi'

const AddCoachDialog = () => {
    const { currentColor } = useStateContext();
    // Add new coach hook
    const [name, setName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { mutate: addCoach } = useAddNewCoachData()

    const handleAddNewCoach = (e) => {
        e.preventDefault()
        const coach = { name, phone_number: PhoneNumber, password }
        addCoach(coach)
    }

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
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <div className='fields'>
                        <TextField
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            margin="dense"
                            label="Coach Name"
                            type="text"
                            WidthFull
                            variant="standard"
                        />
                        <TextField
                            required
                            value={PhoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            margin="dense"
                            label="Phone Number"
                            type="text"
                            WidthFull
                            variant="standard"
                        />
                    </div>
                    <div className='password-field'>
                        <TextField
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            margin="dense"
                            label="Password"
                            type="Password"
                            WidthFull
                            variant="standard"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="white"
                        bgColor="rgb(150 , 0 , 0)"
                        text="Cancel"
                        borderRadius="10px"
                        customFunc={handleClose}
                        className='hover:bg-white hover:border-red-600'
                    />
                    <Button
                        variant="outlined"
                        color="white"
                        bgColor={currentColor}
                        text="Subscribe"
                        borderRadius="10px"
                        customFunc={handleAddNewCoach}
                    />
                </DialogActions>
            </Dialog>
            <Toaster/>
        </React.Fragment>

    )
}

export default AddCoachDialog