import React, { useState } from "react";
import { Loader } from "../../components";
import loginImg from "../../assets/login.svg";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {isLoading && <Loader />}
            <section className="slide-up flex justify-center items-center bg-slate-50 px-5 h-screen-90">
                <div className="duration-500 ease-linear mx-10 hidden md:flex">
                    <img src={loginImg} alt="login-img" width={400} />
                </div>
                <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                    <h3>Login</h3>
                    <form
                    // onSubmit={loginUser}
                    >
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-8"
                            value={password}
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />
                        <button className="btn btn-neutral btn-block font-poppins text-lg font-light">
                            Login
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        // className="bg-blue-500 w-full py-2 text-white rounded flex justify-center items-center"
                        className="btn btn-primary font-poppins font-light btn-block text-lg text-white"
                        type="submit"
                        // onClick={signInWithGoogle}
                    >
                        {" "}
                        <AiOutlineGoogle size={25} /> &nbsp; Login with Google
                    </button>
                    <div className="flex my-1">
                        <Link to="/forgot">Forgot Password</Link>
                    </div>

                    <div className="flex items-end sm:items-center text-sm sm:text-base justify-center mt-4">
                        <p>Don't have an account?</p>
                        <Link to="/register">
                            {" "}
                            <span className="link link-primary link-hover">
                                &nbsp; Register
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
