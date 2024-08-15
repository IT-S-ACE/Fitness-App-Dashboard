import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { AddNewType } from '../api/api';
import toast from 'react-hot-toast';

export const useAddNewType = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewType,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-types');
            console.log(data)
            toast.success('Type Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
            toast.error("Fetch error")
        }
    })
}
