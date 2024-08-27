import React from 'react'
import { useQuery } from 'react-query'
import { GetAllDashboard } from '../api/Admin/api'

export const useAllDashboardData = () => {
    return useQuery('all-dashboard' , GetAllDashboard,{
        onSuccess:(data) => {
            console.log(data)
        }, 
        onError:(err) => {
            console.log(err.message)
        } ,
        // refetchOnWindowFocus: false
    })
}
