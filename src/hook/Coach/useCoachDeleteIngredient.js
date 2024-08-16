import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { CoachDeleteIngredient } from '../../api/coachApi';
import toast from 'react-hot-toast';

export const useCoachDeleteIngredient = () => {
    const queryClient = useQueryClient();

    return useMutation((ingredientID) => CoachDeleteIngredient({ ingredientID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['all-coach-ingredients']);
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
