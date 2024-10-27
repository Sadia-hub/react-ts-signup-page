import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5000/'; // Replace with your actual API base URL

// Create an Axios instance
const httpClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Global Error Handling
httpClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response) {
            console.error("Error: ",error.response.data);           
        } else if (error.request) {
            // Network error or no response from server
            console.error('Network Error - Please check your internet connection');
        } else {
            // Other errors
            console.error('An unexpected error occurred:', error.message);
        }
        return Promise.reject(error); // Reject the error for individual handling if needed
    }
);

export default httpClient;
