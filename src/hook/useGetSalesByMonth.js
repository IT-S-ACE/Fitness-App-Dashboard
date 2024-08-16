import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { SalesByMonths } from '../api/api';
import toast from 'react-hot-toast';
import { useStateContext } from '../contexts/ContextProvider';

export const useGetSalesByMonth = () => {
    const queryClient = useQueryClient()
    const {setSalesNumber } = useStateContext()

    return useMutation(SalesByMonths,{
        onSuccess:(data) =>{
            const salesNum = data.data.data.total_sales
            setSalesNumber(salesNum)
            console.log(salesNum)
            queryClient.invalidateQueries('sales-month');
            console.log('sssssssssssssssssssssssssssssssssssss')
            console.log(data)
            toast.success('Monthly Sales Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
        }
    })
}
