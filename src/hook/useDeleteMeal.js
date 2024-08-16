import React from 'react'
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { DeleteMeal } from '../api/api';

export const useDeleteMeal = () => {
    const queryClient = useQueryClient();

    return useMutation((mealID) => DeleteMeal({ mealID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['all-exercise']);
                console.log(data);
                toast.success('Exercise Deleted Successfully');
            },
            onError: (err) => {
                console.log(err.message);
                toast.error('Delete Error');
            },
        }
    );
}
