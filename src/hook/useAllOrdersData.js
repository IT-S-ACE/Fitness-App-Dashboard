import React from 'react'
import { useQuery } from 'react-query'
import { GetAllOrders } from '../api/api'

export const useAllOrdersData = () => {
    return useQuery('all-orders', GetAllOrders, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => {
            console.log(err.message)
        },
        // refetchOnWindowFocus: false
    })
}
