import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { AddNewCategory } from '../api/api';
import toast from 'react-hot-toast';

export const useAddNewCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewCategory,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-category');
            console.log(data)
            toast.success('Category Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
            toast.error("Fetch error")
        }
    })
}
