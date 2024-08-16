import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { CoachLogOut } from '../../api/coachApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useCoachLogOut = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation(CoachLogOut, 
        {
            onSuccess: (data) => {
                navigate("/")
                queryClient.invalidateQueries(['Coach_info']);
                console.log(data);
                toast.success('LogOut Successfully');
            },
            onError: (err) => {
                console.log(err.message);
                toast.error('LogOut Error');
            },
        }
    );
}
