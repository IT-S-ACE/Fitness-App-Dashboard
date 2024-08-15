import React from 'react'
import { useQuery } from 'react-query'
import { GetAllArticles } from '../api/api'

export const useAllArticleData = () => {
  return useQuery('all-article' , GetAllArticles,{
    onSuccess:(data) => {
        console.log(data)
    }, 
    onError:(err) => {
        console.log(err.message)
    } ,
    // refetchOnWindowFocus: false
})
}
