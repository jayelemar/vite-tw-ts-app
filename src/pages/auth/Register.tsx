import React, { useState } from "react";
import { Loader } from "../../components";
import registerImg from "../../assets/register.svg";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <section>
            <>
                {isLoading && <Loader />}
                <section className="slide-up flex justify-center items-center  h-screen-90 flex-row-reverse bg-slate-50 px-5">
                    <div className="duration-500 ease-linear mx-10 hidden md:flex ">
                        <img src={registerImg} alt="register-img" width={400} />
                    </div>
                    <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                        <h3>Register</h3>
                        <form
                        // onSubmit={loginUser}
                        >
                            <div className="block sm:flex md:block gap-x-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                                    value={name}
                                    onChange={e => {
                                        setName(e.target.value);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-6"
                                    value={email}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>

                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-4"
                                value={confirmPassword}
                                onChange={e => {
                                    setConfirmPassword(e.target.value);
                                }}
                            />
                            <button className="btn btn-primary text-white btn-block font-poppins text-lg font-light">
                                Register
                            </button>
                        </form>

                        <div className="flex items-end sm:items-center text-sm sm:text-base justify-center mt-4">
                            <p>Already have an account? &nbsp; </p>
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
        </section>
    );
}

export default Register;
