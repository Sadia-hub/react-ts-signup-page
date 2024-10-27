export interface ErrorResponse {
    message: string;
    statusCode: number
}


export interface LoginData {
    email: string;
    password: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}

export interface ForgotPasswordProps {
    open: boolean;
    handleClose: () => void;
}