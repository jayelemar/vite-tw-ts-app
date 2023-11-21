import React, { useState } from "react";
import { Loader } from "../../components";
import loginImg from "../../assets/login.svg";
import { Link } from "react-router-dom";

function Reset() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {isLoading && <Loader />}
            <section className="slide-up flex justify-center items-center bg-slate-50 px-5 h-screen-90">
                <div className="duration-500 ease-linear mx-10 hidden md:flex">
                    <img src={loginImg} alt="login-img" width={400} />
                </div>
                <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                    <h3>Reset Password</h3>
                    <form
                    // onSubmit={loginUser}
                    >
                        <input
                            type="password"
                            placeholder="New Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            placeholder="New Confirm Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-4"
                            value={confirmPassword}
                            onChange={e => {
                                setConfirmPassword(e.target.value);
                            }}
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
