import httpClient from "./HttpClient";
import { LoginData, SignupData, AuthResponse } from "../types/types";

// Login Service
export const login = async (data: LoginData): Promise<AuthResponse> => {
    const response = await httpClient.post<AuthResponse>('/auth/signin', data);
    return response.data;
};

// Signup Service
export const signup = async (data: SignupData): Promise<AuthResponse> => {
    const response = await httpClient.post<AuthResponse>('/auth/signup', data);
    return response.data;
};
