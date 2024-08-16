import React from 'react'
import { useQuery } from 'react-query'
import { GetTotalSells } from '../../api/coachApi'

export const useAllTotalSales = () => {
    return useQuery('total-sells', GetTotalSells, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => {
            console.log(err.message)
        }
    }
    )
}
