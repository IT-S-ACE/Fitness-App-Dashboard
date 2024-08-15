import React from 'react'
import { useQuery } from 'react-query'
import { GetCoachInfo } from '../../api/coachApi'

export const useCoachGetInfo = ({coachID}) => {
    return useQuery(
        ['coach-info', coachID],
        GetCoachInfo
    )
}
