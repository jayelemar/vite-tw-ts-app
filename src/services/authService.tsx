import axios from "axios";
import { toast } from "react-toastify";
import { UserData } from "../utils/redux/feature/auth/authSlice";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const registerUser = async (userData: UserData) => {
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
