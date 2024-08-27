import { useMutation, useQueryClient } from 'react-query';
import { CoachDeleteExercisePlan } from '../../api/Coach/coachApi';
import toast from 'react-hot-toast';

export const useCoachDeleteExercise = () => {
    const queryClient = useQueryClient();

    return useMutation((exerciseID) => CoachDeleteExercisePlan({ exerciseID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['plan-exercises']);
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
