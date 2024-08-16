import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { DeleteProduct } from '../api/api';
import toast from 'react-hot-toast';

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation((productID) => DeleteProduct({ productID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['all-products']);
                console.log(data);
                toast.success('Product Deleted Successfully');
            },
            onError: (err) => {
                console.log(err.message);
                toast.error('Delete Error');
            },
        }
    );
}
