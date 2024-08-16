import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { CoachDeleteMeal } from '../../api/coachApi';
import toast from 'react-hot-toast';

export const useCoachDeleteMeal = () => {
    const queryClient = useQueryClient();

    return useMutation((mealID) => CoachDeleteMeal({ mealID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['all-coach-meals']);
                console.log(data);
                toast.success('Meal Deleted Successfully');
            },
            onError: (err) => {
                console.log(err.message);
                toast.error('Delete Error');
            },
        }
    );
}
