import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { AddNewIngredient } from '../api/api'
import toast from 'react-hot-toast'

export const useAddIngredient = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewIngredient,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-ingredients');
            console.log(data)
            toast.success('Ingredient Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
        }
    })
}
