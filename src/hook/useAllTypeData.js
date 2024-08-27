import React from 'react'
import { useQuery } from 'react-query'
import { GetAllTypes } from '../api/Admin/api'

export const useAllTypeData = () => {
    return useQuery('all-types' , GetAllTypes,{
        onSuccess:(data) => {
            console.log(data)
        }, 
        onError:(err) => {
            console.log(err.message)
        } ,
        // refetchOnWindowFocus: false
    })
}
