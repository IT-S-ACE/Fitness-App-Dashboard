import { useMutation, useQueryClient } from 'react-query';
import { DeleteExercise } from '../api/Admin/api';
import toast from 'react-hot-toast';

export const useDeleteExercise = () => {
    const queryClient = useQueryClient();

    return useMutation((exerciseID) => DeleteExercise({ exerciseID }), 
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
};
