import React, { useState } from "react";
import { Loader } from "../../components";
import loginImg from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { loginUser, validateEmail } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import {
    SET_LOGIN,
    SET_NAME,
    UserData,
    selectIsLoggedIn
} from "../../utils/redux/feature/auth/authSlice";
import { toast } from "react-toastify";

type InitialStateType = {
    email: string;
    password: string;
};

const initialState: InitialStateType = {
    email: "",
    password: ""
};

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { email, password } = formData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const login = async (e?: React.FormEvent<HTMLFormElement>) => {
        if (e) {
            e.preventDefault();
        }
        const userData: UserData = {
            isLoggedIn: true,
            email,
            password
        };

        try {
            const data = await loginUser(userData);
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_NAME(data.name));
            navigate("/dashboard");
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const handleLoginClick = async () => {
        if ( isLoggedIn  && (!email || !password)) {
            return toast.error("All fields are required");
        }
        if (password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }
        setIsLoading(true);
        try {
            await login();
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <section className="slide-up flex justify-center items-center bg-slate-50 px-5 h-screen-90 mt-4 sm:mt-12">
                <div className="duration-500 ease-linear mx-10 hidden md:flex">
                    <img src={loginImg} alt="login-img" width={400} /> 
                </div>
                <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                    <h3>Login</h3>
                    <form>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-8"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={() => {
                                handleLoginClick();
                            }}
                            type="button"
                            className="btn btn-neutral btn-block font-poppins text-base sm:text-lg  font-light"
                        >
                            Login
                        </button>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        className="btn btn-primary font-poppins font-light btn-block text-base sm:text-lg  text-white p"
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
