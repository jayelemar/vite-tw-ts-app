export interface UserProps {
    name?: string ;
    email?: string ;
    password?: string ;
    confirmPassword?: string ;
    token?: string | null;
}

export interface AuthProps {
    name: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    token?: string | null;
}

export interface ForgotPasswordProps {
    email: string;
}

export interface ResetTokenProps {
    [key: string]: string;
}


export interface ResetPasswordProps {
    password?: string ;
    confirmPassword?: string ;
}