import { useMutation , useQueryClient } from "react-query";
import { AddNewCoach } from "../api/Admin/api";
import toast from 'react-hot-toast';

export const useAddNewCoachData = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewCoach,{
        onSuccess: (data) => {
            queryClient.invalidateQueries('all-coaches');
            toast.success(data.data.message)
            console.log(data)
        },
        onError: (err) => {
            console.log(err.message)
        }
    })

}
