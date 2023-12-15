import React, { useState } from "react";
// import { Loader } from "../../components";
import loginImg from "../../assets/login.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authService";
import { ResetTokenProps, UserProps } from "../../types/types";

const initialState: UserProps = {
    password: "",
    confirmPassword: ""
};


function Reset() {
    const [formData, setformData] = useState(initialState);
    const { password, confirmPassword } = formData;

    const navigate = useNavigate();

    const { resetToken } = useParams<ResetTokenProps>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const reset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(formData);
        // console.log(resetToken);

        if (!resetToken) {
            return toast.error("Reset token is missing");
        }

        if (!password || password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
        }

        if (!confirmPassword) {
            return toast.error("Confirm Password is missing");
        }

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        const userData :  { password: string; confirmPassword: string } = {
            password,
            confirmPassword,
        };

        try {
            console.log("Sending resetPassword request with userData:", userData, "and resetToken:", resetToken)

            const data = await resetPassword(userData, resetToken);
            console.log("Reset password successful. Response data:", data);

            toast.success(data.message)
            navigate("/login");
        } catch (error) {
            console.error("Error during resetPassword request:", error);
            console.log((error as Error).message);
        }
    };

    return (
        <>
            {/* {isLoading && <Loader />} */}
            <section className="slide-up flex justify-center items-center bg-slate-50 px-5 h-screen-90">
                <div className="duration-500 ease-linear mx-10 hidden md:flex">
                    <img src={loginImg} alt="login-img" width={400} />
                </div>
                <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                    <h3>Reset Password</h3>
                    <form
                    onSubmit={reset}
                    >
                        <input
                            type="password"
                            placeholder="New Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                            value={password}
                            name="password"
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-4"
                            value={confirmPassword}
                            name="confirmPassword"
                            onChange={handleInputChange}
                        />
                        <button className="btn bg-slate-300 btn-block font-poppins text-lg font-normal">
                            Reset Password
                        </button>
                    </form>
                    <div className="flex justify-between items-center mt-3">
                        <Link to="/">
                            {" "}
                            <span className="link link-primary link-hover">
                                Home
                            </span>
                        </Link>
                        <Link to="/login">
                            {" "}
                            <span className="link link-primary link-hover">
                                Login
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reset;
