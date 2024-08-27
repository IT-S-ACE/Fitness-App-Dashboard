import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { AddNewProduct } from '../api/Admin/api';
import toast from 'react-hot-toast';

export const useAddNewProduct = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewProduct,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-products');
            console.log(data)
            toast.success('Product Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
            toast.error("send error")
        }
    })
}
