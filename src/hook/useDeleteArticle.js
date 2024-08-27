import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { DeleteArticle } from '../api/Admin/api';
import toast from 'react-hot-toast';

export const useDeleteArticle = () => {
    const queryClient = useQueryClient();

    return useMutation((articleID) => DeleteArticle({ articleID }), 
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['all-article']);
                console.log(data);
                toast.success('Article Deleted Successfully');
            },
            onError: (err) => {
                console.log(err.message);
                toast.error('Delete Error');
            },
        }
    );
}
