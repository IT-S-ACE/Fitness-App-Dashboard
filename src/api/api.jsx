import axios from "axios";
import Cookies from 'js-cookie';

// const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTcxY2Q5ZjUyY2M2OGQ1YzI2MTdlYmFjMmEwOWFmZDE0NWE2NTE1ZDc0OGZhNDVhMWYwZGJkODE3M2NjODExZDE2NWRmZWY0ZGI0Yjc4ZTEiLCJpYXQiOjE3MTkwMDUxNTYuNjYwMTMsIm5iZiI6MTcxOTAwNTE1Ni42NjAxMzUsImV4cCI6MTc1MDU0MTE1Ni40NzE1MjMsInN1YiI6IjEiLCJzY29wZXMiOlsiYWRtaW4iXX0.UlMCUQjThK2ns53Txq_xoMiVkIHz_0OuiB3m_ZjUrUaU3HJHas2Z3GR5TpehVXDBi3FrPf5MTCFpt31MnHg9axTqBU8EWR5skB-ftwWSjGf4AZVVijZuEXwu31LmsIHbGNDvQl5bDO-XA4jzQ1kqdmuwv959c-x2AcuvUk7PXid8pBOZjEn8xSp0qXfgTzmPcVNR88dlfhSTLsNfIXEVhqDeIWGFXH-Vj_Yv8ZAmv55zY-MVF_rOImkf9tSA3EA7Pgm_zGEdbrnBYHQnpjRVcbP0VMQ_rAHU-HVz-pPCaagDT4Jn_aZbpsatJw_csRyBAr2BFh58BtQu7VsrXUSYwuCtZ3VJdzEj5dMkrW3XjDmojSjVpzvYM8-GB-9-YzQUjYu42fNvkfVFIQA6dx0bQMCAvV6vaZ7EWNJoxU3izHygdixy-5UjWTxK5P2u7yQnMnK-BQLS8Cfv6VXk7HWfoSiS5AfAhUX3WTDrIX3OC538Fo7CpxKKVG091MHGEjuyBdgwHQcL79pEFfV4zXrsGd51yRiVGpjyBuDgi4fP-d3jMnKhZZxggF5n_cWRDZjLL3lmyK34mn87s_-ySj3mo0YEbTJ29UfjRgINV2sbLqXXhh06XSFfTT9G58fYdnVJwDxm8EXzBTAWs-8U4EG3p0MYdUfdxjCgwM4YPGbL3Sw'
const api = axios.create({
    baseURL: 'https://de68-138-199-7-163.ngrok-free.app/api'
    // ,headers: {'Authorization': `Bearer ${adminToken}`}
})

//              LOCAL STORAGE
// api.interceptors.request.use(config => {
//     const token = localStorage.getItem('adminToken'); // Retrieve token from localStorage
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

api.interceptors.request.use(
    async (config) => {
        const token = Cookies.get('adminToken'); // Retrieve token from cookies
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



export const GetAllCoaches = async () => {
    // const {adminToken} = useStateContext();
    const response = await api.get('/admin/coach/allCoach' 
    // , {headers:{'Authorization': `Bearer ${adminToken}`}}
);
    return response.data
}

export const AddNewCoach = async(detail) => {
    return await api.post('/admin/coach/addNewCoach', detail)
}

export const AddNewArtical = async (detail) => {
    return await api.post('/admin/articl/addNewArticls',detail)
}

export const AddNewIngredient = async (detail) => {
    return await api.post('/admin/ingredient/store',detail)
}

export const GetAllIngredients = async () => {
    const response = await api.get('/admin/ingredient/getAll' 
);
    return response.data
}

export const AddNewMeal = async (detail) => {
    return await api.post('/admin/meal/store',detail)
}

export const GetAllMeals = async () => {
    const response = await api.get('/admin/meal/getAll' 
);
    return response.data
}

export const AddNewExercise = async (detail) => {
    return await api.post('/admin/exercise/addNewExercises',detail)
}

export const GetAllCategory = async () => { 
    const response = await api.get('/category/show' 
);
    return response.data
}

export const AddNewExerciseToType = async (detail) => {
    return await api.post('/admin/exercise/addNewExercisesType',detail)
}

export const AddNewCategory = async (detail) => {  
    return await api.post('/admin/category/addNewCategory',detail)
}

export const GetAllExercises = async () => {
    const response = await api.get('/admin/exercise/getall' 
);
    return response.data
}

export const GetAllArticles = async () => {
    const response = await api.get('/admin/articl/allArticls' 
);
    return response.data
}

export const GetAllChallenges = async () => {
    const response = await api.get('/admin/challenge/getAll' 
);
    return response.data
}

export const AddNewChallenge = async (detail) => {  
    return await api.post('/admin/challenge/addNewChallenge',detail)
}

export const GetAllTypes = async () => {  
    const response = await api.get('/admin/exerciseType/getAll' 
);
    return response.data
}

export const AddNewType = async (detail) => {
    return await api.post('/admin/exerciseType/addExerciseType',detail)
}

export const GetAllProducts = async () => {  
    const response = await api.get('/admin/products/allProducts' 
);
    return response.data
}

export const AddNewProduct = async (detail) => {
    return await api.post('/admin/products/create',detail)
}

export const GetAllOrders = async () => {  
    const response = await api.get('/admin/products/order/index' 
);
    return response.data
}

export const GetSetSent = async (orderID) => {  
    // const orderID = queryKey[1]
    // console.log(orderID)
    const response = await api.get(`/admin/products/order/status/sent/${orderID}` 
);
    return response.data
}

export const GetSetRecived = async (orderID ) => {  
    // const orderID = queryKey[1]
    // console.log(orderID)
    const response = await api.get(`/admin/products/order/status/received/${orderID}` 
);
    return response.data
}

export const GetAllBills = async () => {  
    const response = await api.get('/admin/products/order/bill' 
);
    return response.data
}

export const GetAllDashboard = async () => {  
    const response = await api.get('/admin/report/userCount' 
);
    return response.data
}

export const GetAllRefunds = async () => {  
    const response = await api.get('/admin/report/refund' 
);
    return response.data
}

export const AddNewPosters = async (detail) => {
    return await api.post('/admin/products/Poster/create',detail)
}

export const DeleteProduct = async ({productID}) => {
    return await api.delete(`/admin/products/DeleteProduct/${productID}`)
}

export const DeleteExercise = async ({ exerciseID }) => {
    return await api.delete(`/admin/exercise/deleteExercise/${exerciseID}`);
};

export const DeleteMeal = async ({ mealID }) => {
    return await api.delete(`/admin/meal/destroy/${mealID}`);
};

export default api
