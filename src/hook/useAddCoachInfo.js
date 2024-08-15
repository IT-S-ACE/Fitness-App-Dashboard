import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { CoachRegister } from '../api/coachApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export const useAddCoachInfo = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const {setStorCoachID } = useStateContext()

    return useMutation(CoachRegister , {
        onSuccess: (data) =>{
            const coachID = data.data.coach.id
            setStorCoachID(coachID)
            console.log(data.data.coach.id)
            queryClient.invalidateQueries('coach-info');
            toast.success('Coach Info Added Successfuly')
            navigate("/Coach")
            console.log(data)
        },
        onError: (err) => {
            console.log(err)
            toast.error("Feild Entered")
        }
    })
    
}
