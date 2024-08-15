import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { CoachAddMeal } from '../../api/coachApi';
import toast from 'react-hot-toast';

export const useCoachAddMeal = () => {
    const queryClient = useQueryClient()
    return useMutation(CoachAddMeal,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-coach-meals');
            console.log(data)
            toast.success('Meal Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
        }
    })
}
