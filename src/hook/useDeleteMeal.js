import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { DeleteMeal } from '../api/Admin/api';

export const useDeleteMeal = () => {
    const queryClient = useQueryClient();

    return useMutation((mealID) => DeleteMeal({ mealID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['all-meals']);
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
