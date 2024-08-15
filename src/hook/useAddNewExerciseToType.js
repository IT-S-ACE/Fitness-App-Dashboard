import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { AddNewExerciseToType } from '../api/api';

export const useAddNewExerciseToType = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewExerciseToType,{
        onSuccess:(data) =>{
            queryClient.invalidateQueries('all-exercises-to-type');
            console.log(data)
            toast.success('Exercise Added Successfuly')
        },
        onError: (err) => {
            console.log(err.message)
            toast.error("Fetch error")
        }
    })
}
