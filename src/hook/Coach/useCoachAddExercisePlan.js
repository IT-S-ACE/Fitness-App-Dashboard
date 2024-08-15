import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { CoachAddExercisesPlan } from '../../api/coachApi';
import toast from 'react-hot-toast';

export const useCoachAddExercisePlan = ({onSuccess}) => {
    const queryClient = useQueryClient()
    return useMutation(CoachAddExercisesPlan,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('plan-exercises');
            console.log(data)
            toast.success('Exercise Added Successfuly')
            onSuccess()
        },
        onError: (err) => {
            console.log(err.message)
            toast.error("Fetch error")
        }
    })
}
