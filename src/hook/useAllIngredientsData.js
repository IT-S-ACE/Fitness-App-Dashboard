import React from 'react'
import { useQuery } from 'react-query'
import { GetAllIngredients } from '../api/api'

export const useAllIngredientsData = () => {
  return useQuery('all-ingredients' , GetAllIngredients,{
    onSuccess:(data) => {
        console.log(data)
    }, 
    onError:(err) => {
        console.log(err.message)
    } ,
    // refetchOnWindowFocus: false
})
}
