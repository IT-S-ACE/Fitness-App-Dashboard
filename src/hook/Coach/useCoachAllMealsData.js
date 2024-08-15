import React from 'react'
import { useQuery } from 'react-query'
import { CoachGetAllMeals } from '../../api/coachApi'

export const useCoachAllMealsData = () => {
    return useQuery('all-coach-meals' , CoachGetAllMeals,{
        onSuccess:(data) => {
            console.log(data)
        }, 
        onError:(err) => {
            console.log(err.message)
        } ,
        // refetchOnWindowFocus: false
    })
}
