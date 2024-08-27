import React from 'react'
import { useQuery } from 'react-query'
import { GetAllMeals } from '../api/Admin/api'

export const useAllMealsData = () => {
  return useQuery('all-meals' , GetAllMeals,{
    onSuccess:(data) => {
        console.log(data)
    }, 
    onError:(err) => {
        console.log(err.message)
    } ,
    // refetchOnWindowFocus: false
})
}
