import httpClient from "./HttpClient";

interface LoginData {
    email: string;
    password: string;
}

interface SignupData {
    name: string;
    email: string;
    password: string;
}

interface AuthResponse {
    token: string;
    // user: {
    //     id: string;
    //     name: string;
    //     email: string;
    // };
}

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
