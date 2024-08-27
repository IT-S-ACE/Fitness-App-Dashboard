import { useQuery } from "react-query";
import { GetAllCoaches } from "../api/Admin/api";

export const useAllCoachesData = (onSuccess , onError) => {
    return useQuery('all-coaches' , GetAllCoaches,{
        onSuccess , onError ,
        refetchOnWindowFocus: false
    })
}
