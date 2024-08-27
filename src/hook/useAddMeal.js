import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { AddNewMeal } from '../api/Admin/api';
import toast from 'react-hot-toast';

export const useAddMeal = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewMeal,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-meals');
            console.log('sssssssssssssssssssssssssssssssssssss')
            console.log(data)
            toast.success('Meal Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
        }
    })
}
