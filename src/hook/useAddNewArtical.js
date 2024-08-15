import { useMutation , useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { AddNewArtical } from "../api/api";



export const useAddNewArticalData = () => {
    const queryClient = useQueryClient()
    return useMutation(AddNewArtical,{
        onSuccess: (data) => {
            queryClient.invalidateQueries('all-articals');
            console.log(data)
            toast.success("Artical Added Successfully")
        },
        onError: (err) => {
            console.log(err.message)
        }
    })

}

