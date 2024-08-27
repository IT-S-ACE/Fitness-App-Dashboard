import React from 'react'
import { useQuery } from 'react-query'
import { CoachGetAllIngredients } from '../../api/Coach/coachApi'

export const useCoachAllingredientsData = () => {
    return useQuery('all-coach-ingredients' , CoachGetAllIngredients,{
        onSuccess:(data) => {
            console.log(data)
        }, 
        onError:(err) => {
            console.log(err.message)
        } ,
        // refetchOnWindowFocus: false
    })
}
