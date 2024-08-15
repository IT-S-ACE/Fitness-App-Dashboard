import React from 'react'
import { useQuery } from 'react-query'
import { GetAllBills } from '../api/api'

export const useAllBillsData = () => {
    return useQuery('all-bills' , GetAllBills,{
        onSuccess:(data) => {
            console.log(data)
        }, 
        onError:(err) => {
            console.log(err.message)
        } ,
        // refetchOnWindowFocus: false
    })
}
