import React from 'react'
import { useQuery } from 'react-query'
import { GetAllExercises } from '../api/Admin/api'

export const useAllExerciseData = () => {
  return useQuery('all-exercise' , GetAllExercises,{
    onSuccess:(data) => {
        console.log(data)
    }, 
    onError:(err) => {
        console.log(err.message)
    } ,
    // refetchOnWindowFocus: false
})
}
