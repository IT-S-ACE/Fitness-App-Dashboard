// import React from 'react'
// import { useQuery } from 'react-query'
// import { GetSetSent } from '../api/Admin/api'

import { useMutation, useQueryClient } from "react-query";
import { GetSetSent } from "../api/Admin/api";

// export const useSetSent = (orederID) => {
//     return useQuery(
//         ['all-orders', orederID],
//         GetSetSent
//     )
// }

export const useSetSent = () => {
    const queryClient = useQueryClient();
    return useMutation((orderID) => GetSetSent(orderID), {
      onSuccess: () => {
        // Invalidate the cache for all orders to reflect the change
        queryClient.invalidateQueries('all-orders');
      },
    });
  };