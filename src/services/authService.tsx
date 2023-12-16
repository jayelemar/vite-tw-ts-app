import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { ForgotPasswordProps, UserProps } from "../types/types";


export const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

export const validateEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const registerUser = async (userData: UserProps) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/users/register`,
            userData
        );
        if (response.statusText === "OK") {
            toast.success("User Registered Succesfully");
        }
        return response.data;
    } catch (error) {
        console.error("Error in registerUser:", error);

        if (axios.isAxiosError(error)) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
        } else {
            toast.error("An unexpected error occurred");
        }
    }
};

export const loginUser = async (userData: UserProps) => {
    try {
        const response: AxiosResponse = await axios.post(
            `${BACKEND_URL}/api/users/login`,
            userData
        );

        if (response.statusText === "OK") {
            toast.success("Login Successful...");
        }
        console.log("Login Response:", response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
        } else {
            toast.error("An unexpected error occurred");
        }
    }
};

export const logoutUser = async () => {
    try {
        await axios.get(`${BACKEND_URL}/api/users/logout`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                "An unexpected error occurred during login.";
            console.error("Server response:", message);
            toast.error(message);
        } else {    
            toast.error("An unexpected error occurred");
        }
    }
};

export const forgotPassword = async (userData: ForgotPasswordProps) => {
    try {
        const response =  await axios.post(`${BACKEND_URL}/api/users/forgotpassword`, userData);
        const resetToken = response.data.resetToken;
        if (resetToken) {
            const resetLink = `${window.location.origin}/resetpassword/${resetToken}`;
            console.log('Reset Link:', resetLink);

            toast.success(response.data.message);
        } else {
            console.error('Reset Token is undefined in server response');
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                "An unexpected error occurred during login.";
            toast.error(message);
        } else {
            toast.error("An unexpected error occurred");
        }
    }
};

export const resetPassword = async (userData: UserProps, resetToken: string)  => {
    try {
        const response =  await axios.put(`${BACKEND_URL}/api/users/resetpassword/${resetToken}`, userData);
        return response.data
    } catch (error) {
        console.error("Reset Password Error:", error);
        if (axios.isAxiosError(error)) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                "An unexpected error occurred during login.";
                console.error("Server response:", message);
            toast.error(message);
        } else {
            toast.error("An unexpected error occurred");
        }
    }
};
