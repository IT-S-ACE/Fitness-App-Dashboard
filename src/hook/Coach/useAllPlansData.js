import React from 'react'
import { useQuery } from 'react-query'
import { GetAllPlans } from '../../api/coachApi'

export const useAllPlansData = () => {
  return useQuery('all-plans' , GetAllPlans,{
    onSuccess:(data) => {
        console.log(data)
    },
    onError:(err) => {
        console.log(err.message)
    }
  }
  )
}
