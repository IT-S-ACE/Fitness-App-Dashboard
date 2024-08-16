import axios from "axios";
import Cookies from 'js-cookie';

const coachApi = axios.create({
    baseURL: 'https://48c4-146-70-246-155.ngrok-free.app/api'
})

coachApi.interceptors.request.use(
    async (config) => {
        const token = Cookies.get('coachToken'); // Retrieve token from cookies
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        // Adding the custom ngrok header
        config.headers['ngrok-skip-browser-warning'] = '69420';
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const CoachLogin = async (detail) => {   
    return await coachApi.post("/coach/login", detail);
}

export const CoachRegister = async (detail) => {      
    return await coachApi.post("/coach/createInfo" , detail);
}

export const AddPlan = async (detail) => {      
    return await coachApi.post("/coach/plan/create" , detail);
}

export const GetAllPlans = async () => {
    const response = await coachApi.get('/coach/plan/getAllPlan' 
);
    return response.data
}

export const CoachAddIngredient = async (detail) => {      
    return await coachApi.post("/coach/ingredient/store" , detail);
}

export const CoachAddMeal = async (detail) => {      
    return await coachApi.post("/coach/meal/store" , detail);
}

export const PlanWithExercises = async ({ queryKey }) => {
    const planID = queryKey[1]
    console.log(planID)
    const response = await coachApi.get('/coach/plan/planWithExercises' ,{ 
        params:{ coachPlanId : planID }
    }
);
    return response.data
}

export const CoachAddExercisesPlan = async (detail) => {      
    return await coachApi.post("/coach/exercise/create" , detail);
}


export const CoachGetAllMeals = async () => {
    const response = await coachApi.get('/coach/meal/index' 
);
    return response.data
}

export const CoachGetAllIngredients = async () => {
    const response = await coachApi.get('/coach/ingredient/getAllIngredients' 
);
    return response.data
}

// export const GetCoachInfo = async ({coachID}) => {
//     const response = await coachApi.get(`/coach/${coachID}` 
// );
//     return response.data
// }

export const GetCoachInfo = async ({ queryKey }) => {
    const coachID = queryKey[1]
    console.log(coachID)
    const response = await coachApi.get(`/coach/${coachID}`
);
    return response.data
}

export const GetAllTrainers = async () => {
    const response = await coachApi.get('/coach/user/getAllUserSubscriptionWithCoach' 
);
    return response.data
}

export const GetTotalSells = async () => {
    const response = await coachApi.get('/coach/user/totalSale' 
);
    return response.data
}

export const CoachDeleteIngredient = async ({ ingredientID }) => {
    return await coachApi.delete(`/coach/ingredient/destroy/${ingredientID}`);
};

export const CoachDeleteMeal = async ({ mealID }) => {
    return await coachApi.delete(`/coach/meal/destroy/${mealID}`);
};

export const sendTrainerNotification = async ({ TrainerID }) => {
    return await coachApi.delete(`/coach/meal/destroy/${TrainerID}`);
};

export const CoachLogOut = async () => {
    return await coachApi.get('/coach/logout');
};
