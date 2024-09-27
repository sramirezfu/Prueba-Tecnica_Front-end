import axios, { AxiosInstance, AxiosResponse } from 'axios';


const createAxiosInstance = (baseURL: string) => {
    const api: AxiosInstance = axios.create({
        baseURL,
        timeout: 15000
    });

    api.interceptors.request.use(
        (config: any) => {
            config.headers = {
                ...config.headers,
            };
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return api;
};

export default createAxiosInstance;
