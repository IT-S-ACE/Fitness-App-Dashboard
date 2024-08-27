import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { AddNewExercise } from '../api/Admin/api';
import toast from 'react-hot-toast';

export const useAddNewExercise = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewExercise,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-exercises');
            console.log(data)
            toast.success('Exercise Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
            toast.error("Fetch error")
        }
    })
}
