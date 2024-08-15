import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { AddNewPosters } from '../api/api';
import toast from 'react-hot-toast';

export const useAddNewPoster = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewPosters,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-posters');
            console.log('sssssssssssssssssssssssssssssssssssss')
            console.log(data)
            toast.success('Poster Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
        }
    })
}
