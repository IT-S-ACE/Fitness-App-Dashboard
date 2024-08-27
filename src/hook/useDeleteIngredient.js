import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { DeleteIngredient } from '../api/Admin/api';
import toast from 'react-hot-toast';

export const useDeleteIngredient = () => {
    const queryClient = useQueryClient();

    return useMutation((ingredientID) => DeleteIngredient({ ingredientID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['all-ingredients']);
                console.log(data);
                toast.success('Ingredients Deleted Successfully');
            },
            onError: (err) => {
                console.log(err.message);
                toast.error('Delete Error');
            },
        }
    );
}
