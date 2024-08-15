import React from 'react'
import { useQuery } from 'react-query'
import { GetAllRefunds } from '../api/api'

export const useAllRefundsData = () => {
    return useQuery('all-refunds' , GetAllRefunds,{
        onSuccess:(data) => {
            console.log(data)
        }, 
        onError:(err) => {
            console.log(err.message)
        } ,
        // refetchOnWindowFocus: false
    })
}
