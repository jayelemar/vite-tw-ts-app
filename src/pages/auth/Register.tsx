import React, { useState } from "react";
import { Loader } from "../../components";
import registerImg from "../../assets/register.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME} from "../../store/redux/feature/authSlice";
import { useDispatch } from "react-redux";
import { RegisterProps } from "../../types/types";

const initialState: RegisterProps = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
};

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { name, email, password, confirmPassword } = formData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !password) {
            return toast.error("All fields are required");
        }
        if (password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }
        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        const userData = {
            isLoggedIn: false,
            name,
            email,
            password
        };
        setIsLoading(true);
        try {
            const data = await registerUser(userData);
            console.log(data);
            await dispatch(SET_NAME(data.name));
            await dispatch(SET_LOGIN((true)));
            toast.success("Account Registration Successful")
            navigate("/dashboard");
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            console.log((error as Error).message);
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            <section className="slide-up flex justify-center items-center h-screen-90 flex-row-reverse bg-slate-50 px-5 mt-10">
                <div className="duration-500 ease-linear mx-10 hidden md:flex">
                    <img src={registerImg} alt="register-img" width={400} />
                </div>
                <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                    <h3>Register</h3>
                    <form
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                            register(e)
                        }
                    >
                        <div className="block sm:flex md:block gap-x-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                                value={formData.name }
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-6"
                                value={formData.email }
                                onChange={handleInputChange}
                            />
                        </div>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-4"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-error text-white btn-block font-poppins text-lg font-light">
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
    );
}

export default Register;
