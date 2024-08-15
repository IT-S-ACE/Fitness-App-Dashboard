import React from 'react'
import { useQuery } from 'react-query'
import { GetAllTrainers } from '../../api/coachApi'

export const useAllTrainersData = () => {
    return useQuery('all-trainers', GetAllTrainers, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => {
            console.log(err.message)
        }
    }
    )
}
