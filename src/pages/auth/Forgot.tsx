import React, { useState } from "react";
import loginImg from "../../assets/login.svg";
import { Link } from "react-router-dom";
import { forgotPassword, validateEmail } from "../../services/authService";
import { toast } from "react-toastify";

interface ForgotPasswordData {
    email: string;
}

function Forgot() {
    const [email, setEmail] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const forgot = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            return toast.error("Please enter an email");
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }

        const userData: ForgotPasswordData =  { email } 

        await forgotPassword(userData);
        setEmail("")

    };

    return (
        <>
            <section className="slide-up flex justify-center items-center bg-slate-50 px-5 h-screen-90">
                <div className="duration-500 ease-linear mx-10 hidden md:flex">
                    <img src={loginImg} alt="login-img" width={400} />
                </div>
                <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                    <h3>Forgot Password</h3>
                    <form
                    onSubmit={forgot}
                    >
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <button className="btn bg-slate-300 btn-block font-poppins text-lg font-light">
                            Get Reset Email
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

export default Forgot;
