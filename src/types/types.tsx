import { ReactNode } from "react";

export interface UserProps {
    name?: string ;
    email?: string ;
    password?: string ;
    token?: string | null;
}

export interface AuthProps {
    name: string;
    email?: string;
    isLoggedIn: boolean;
    token?: string | null;
}

export interface ForgotPasswordProps {
    email: string;
}


export interface RegisterProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ResetProps {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    token?: string | null;
}


export interface ResetTokenProps {
    [key: string]: string;
}


export interface ResetPasswordProps {
    password?: string ;
    confirmPassword?: string ;
}

export interface LoginProps {
    children: ReactNode;
}

export interface LogoutProps {
    children: ReactNode;
}