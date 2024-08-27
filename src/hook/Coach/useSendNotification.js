import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { sendTrainerNotification } from '../../api/Coach/coachApi';
import toast from 'react-hot-toast';

export const useSendNotification = () => {
    const queryClient = useQueryClient();

    return useMutation((TrainerID) => sendTrainerNotification({ TrainerID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['notification']);
                console.log(data);
                toast.success('Notified Successfully');
            },
            onError: (err) => {
                console.log(err.message);
                toast.error('Notidied Error');
            },
        }
    );
}
