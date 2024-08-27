import React from 'react'
import { useQuery } from 'react-query'
import { GetAllProducts } from '../api/Admin/api'

export const useAllProductData = () => {
    return useQuery('all-products' , GetAllProducts,{
        onSuccess:(data) => {
            console.log(data)
        }, 
        onError:(err) => {
            console.log(err.message)
        } ,
        // refetchOnWindowFocus: false
    })
}
