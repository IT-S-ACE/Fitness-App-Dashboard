import React from 'react'
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { AddNewChallenge } from '../api/api';

export const useAddNewChallenge = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewChallenge,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-challenge');
            console.log(data)
            toast.success('Challenge Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
            toast.error("Send error")
        }
    })
}
