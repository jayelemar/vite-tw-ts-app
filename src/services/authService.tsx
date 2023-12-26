import axios from "axios";
import { toast } from "react-toastify";
import { ForgotPasswordProps, UserProps } from "../types/types";

export const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

export const registerUser = async (userData: UserProps) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true },
    );
    if (response.statusText === "OK") {
      toast.success("User Registered successfully");
    }
    return response.data;
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

export const loginUser = async (
  userData: UserProps,
): Promise<UserProps | null> => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData,
    );

    console.log("Server Response:", response);

    if (response.status !== 200) {
      const errorText = await response.data.text();
      console.error("Login failed. Server response:", errorText);
      throw new Error(`Login failed with status ${response.status}`);
    }

    // Check if the response data is JSON
    const contentType = response.headers["content-type"];
    if (contentType && contentType.includes("application/json")) {
      const data: UserProps = response.data;
      console.log("Data received from server:", data);
      return data;
    } else {
      console.error("Response data is not JSON:", response.data);
      throw new Error("Invalid response data format");
    }
  } catch (error) {
    console.error("Error during login:", error);
    return null;
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
    const response = await axios.post(
      `${BACKEND_URL}/api/users/forgotpassword`,
      userData,
    );
    const resetToken = response.data.resetToken;
    if (resetToken) {
      const resetLink = `${window.location.origin}/resetpassword/${resetToken}`;
      console.log("Reset Link:", resetLink);

      toast.success(response.data.message);
    } else {
      console.error("Reset Token is undefined in server response");
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

export const resetPassword = async (
  userData: UserProps,
  resetToken: string,
) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/users/resetpassword/${resetToken}`,
      userData,
    );

    // Check the response from the server
    console.log("Reset Password Response:", response.data);

    return response.data; // Assuming the response contains success and message properties
  } catch (error) {
    console.error("Reset Password Error:", error);

    if (axios.isAxiosError(error)) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        "An unexpected error occurred during password reset.";
      console.error("Server response:", message);
      throw new Error(message);
    } else {
      console.error("An unexpected error occurred");
      throw new Error("An unexpected error occurred during password reset.");
    }
  }
};

export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`);
    return response.data;
  } catch (error) {
    console.error("Reset Password Error:", error);

    if (axios.isAxiosError(error)) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        "An unexpected error occurred during password reset.";
      console.error("Server response:", message);
      throw new Error(message);
    } else {
      console.error("An unexpected error occurred");
      throw new Error("An unexpected error occurred during password reset.");
    }
  }
};
