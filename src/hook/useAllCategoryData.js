import React from 'react'
import { useQuery } from 'react-query'
import { GetAllCategory } from '../api/api'

export const useAllCategoryData = () => {
    return useQuery('all-category', GetAllCategory, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => {
            console.log(err.message)
        },
        // refetchOnWindowFocus: false
    })
}
