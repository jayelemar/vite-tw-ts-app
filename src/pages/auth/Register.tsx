import React, { useState } from "react";
import { Loader } from "../../components";
import registerImg from "../../assets/register.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../store/redux/feature/auth/authSlice";
import { useDispatch } from "react-redux";

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: RegisterProps = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
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
      password,
    };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      console.log(data);
      await dispatch(SET_NAME(data.name));
      await dispatch(SET_LOGIN(true));
      toast.success("Account Registration Successful");
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
      <section className="slide-up h-screen-90 mt-10 flex flex-row-reverse items-center justify-center bg-slate-50 px-5">
        <div className="mx-10 hidden duration-500 ease-linear md:flex">
          <img src={registerImg} alt="register-img" width={400} />
        </div>
        <div className="w-full p-6 px-5 shadow-xl duration-500 ease-linear md:w-96 lg:w-[30rem]">
          <h3>Register</h3>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => register(e)}>
            <div className="block gap-x-2 sm:flex md:block">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input-base input input-bordered mb-2 w-full placeholder:font-poppins placeholder:text-lg"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input-base input input-bordered mb-6 w-full placeholder:font-poppins placeholder:text-lg"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-base input input-bordered mb-2 w-full placeholder:font-poppins placeholder:text-lg"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input-base input input-bordered mb-4 w-full placeholder:font-poppins placeholder:text-lg"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button className="btn btn-error btn-block font-poppins text-lg font-light text-white">
              Register
            </button>
          </form>

          <div className="mt-4 flex items-end justify-center text-sm sm:items-center sm:text-base">
            <p>Already have an account? &nbsp; </p>
            <Link to="/login">
              {" "}
              <span className="link-hover link-primary link">Login</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
