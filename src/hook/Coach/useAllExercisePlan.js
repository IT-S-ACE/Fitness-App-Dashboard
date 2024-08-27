import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { PlanWithExercises } from '../../api/Coach/coachApi';
import toast from 'react-hot-toast';

export const useAllExercisePlan = (planID) => {
    return useQuery(
        ['plan-exercises', planID],
        PlanWithExercises
    )
}
