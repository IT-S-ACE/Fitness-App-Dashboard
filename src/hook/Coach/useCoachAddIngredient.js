import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { CoachAddIngredient } from '../../api/Coach/coachApi';
import toast from 'react-hot-toast';

export const useCoachAddIngredient = () => {
    const queryClient = useQueryClient()
    return useMutation(CoachAddIngredient,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-coach-ingredients');
            console.log(data)
            toast.success('Ingredient Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
        }
    })
}
