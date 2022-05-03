import axios from "axios";
import axiosRetry from "axios-retry";

const post = async (url,Body,header) => {
    try{
        const response = await axios.post(url,Body);
        if(response ){
            return response
        }
    }catch(error){
        return error;
    }
}

const put = async (url,Body,header) => {
    try{
        const response = await axios.put(url,Body);
        if(response){
            return response.data
        }
    }catch(error){
            return error;
    }
}


const patch = async (url,Body,header) => {
    try{
        const response = await axios.patch(url,Body);
        if(response){
            return response.data
        }
    }catch(error){
        return error;      
    }
}

const get = async (url,header) => {
    try{
        const response = await axios.get(url);
        if(response){
            return response
        }
    }catch(error){
        return error;
    }
}

const deleteAxios = async (url,header) => {
    try{
        const response = await axios.delete(url);
        if(response){
            return response.data
        }
    }catch(error){
            return error;
    }
}

const retryApi = async(method,url,header) => {
    axiosRetry(axios,{
        retries: 10,
        retryDelay: (retryCount) => {
            console.warn("retry attempt:" +retryCount);
            return retryCount * 1000;
        },
        retryCondition: (error) => {
            return(
                error && error.message === "Request failed with status code 400"
            );
        },
    });
    //future purpose.
}

export { get, post,put, patch,deleteAxios,retryApi };