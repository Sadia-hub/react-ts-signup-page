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
            // Handle different HTTP status codes
            switch (error.response.status) {
                case 401:
                    console.error('Unauthorized - Please log in again');
                    // You might want to redirect to login page here or clear auth token
                    break;
                case 403:
                    console.error('Forbidden - You do not have access');
                    break;
                case 404:
                    console.error('Not Found - The requested resource was not found');
                    break;
                case 500:
                    console.error('Server Error - Try again later');
                    break;
                default:
                    console.error(`Unexpected error: ${error.response.status}`);
            }
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
