import React, { useState } from "react";
import { Loader } from "../../components";
import registerImg from "../../assets/register.svg";
import { Link } from "react-router-dom";
const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
};

function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <>
            {isLoading && <Loader />}
            <section className="slide-up flex justify-center items-center  h-screen-90 flex-row-reverse bg-slate-50 px-5 mt-10">
                <div className="duration-500 ease-linear mx-10 hidden md:flex ">
                    <img src={registerImg} alt="register-img" width={400} />
                </div>
                <div className="w-full md:w-96 lg:w-[30rem] p-6 duration-500 ease-linear px-5 shadow-xl">
                    <h3>Register</h3>
                    <form onSubmit={register}>
                        <div className="block sm:flex md:block gap-x-2">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                                value={formData.name}
                                onChange={e =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-6"
                                value={formData.email}
                                onChange={e =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })
                                }
                            />
                        </div>

                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-2"
                            value={formData.password}
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value
                                })
                            }
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input input-bordered w-full input-base placeholder:font-poppins placeholder:text-lg mb-4"
                            value={formData.confirmPassword}
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    confirmPassword: e.target.value
                                })
                            }
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
    );
}

export default Register;
