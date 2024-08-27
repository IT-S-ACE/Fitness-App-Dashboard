// import React from 'react'
// import { useQuery } from 'react-query'
// import { GetSetRecived } from '../api/Admin/api'

import { useMutation, useQueryClient } from "react-query";
import { GetSetRecived } from "../api/Admin/api";

// export const useSetRecived = (orederID) => {
//     return useQuery(
//         ['all-orders', orederID],
//         GetSetRecived
//     )
// }

export const useSetRecived = () => {
    const queryClient = useQueryClient();
    return useMutation((orderID) => GetSetRecived(orderID), {
      onSuccess: () => {
        // Invalidate the cache for all orders to reflect the change
        queryClient.invalidateQueries('all-orders');
      },
    });
  };