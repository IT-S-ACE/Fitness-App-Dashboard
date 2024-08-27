import React from 'react'
import { useQuery } from 'react-query'
import { GetAllChallenges } from '../api/Admin/api'

export const useAllChallengeData = () => {
  return useQuery('all-challenge', GetAllChallenges, {
    onSuccess: (data) => {
        console.log(data)
    },
    onError: (err) => {
        console.log(err.message)
    },
    // refetchOnWindowFocus: false
})
}
