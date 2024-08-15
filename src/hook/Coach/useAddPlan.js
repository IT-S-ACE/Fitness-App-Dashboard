import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { AddPlan } from '../../api/coachApi'
import toast from 'react-hot-toast'

export const useAddPlan = () => {
    const queryClient = useQueryClient()
  return useMutation(AddPlan , {
    onSuccess:(data) => {
        queryClient.invalidateQueries('all-plans');
        console.log(data)
        toast.success('Plan Added Successfully')
    },
    onError:(err) => {
        console.log(err.message)
        toast.error('Error in add Plan')
    }
  })
}
