import React from 'react'
import { useQuery } from 'react-query'
import { CoachGetAllMeals } from '../../api/Coach/coachApi'

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
