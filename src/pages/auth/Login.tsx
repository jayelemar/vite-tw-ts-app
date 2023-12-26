import React, { useState } from "react";
import { Loader } from "../../components";
import loginImg from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { loginUser, validateEmail } from "../../services/authService";
import { useDispatch } from "react-redux";
import { SET_NAME, SET_LOGIN } from "../../store/redux/feature/auth/authSlice";
import { toast } from "react-toastify";

interface UserProps {
  name?: string;
  email?: string;
  password?: string;
  token?: string | null;
}

const initialState: UserProps = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name) {
      setformData({ ...formData, [name]: value });
    }
  };

  const login = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    const userData: UserProps = {
      email,
      password,
    };

    try {
      const data = await loginUser(userData);
      if (data) {
        if (data.name) {
          await dispatch(SET_NAME(data.name));
          await dispatch(SET_LOGIN(true));

          navigate("/dashboard");
        } else {
          console.error("Invalid data received. Name is missing:", data);
        }
      } else {
        console.error("Invalid data received:", data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleLoginClick = async () => {
    if (!email || !password) {
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
      <section className="slide-up h-screen-90 mt-4 flex items-center justify-center bg-slate-50 px-5 sm:mt-12">
        <div className="mx-10 hidden duration-500 ease-linear md:flex">
          <img src={loginImg} alt="login-img" width={400} />
        </div>
        <div className="w-full p-6 px-5 shadow-xl duration-500 ease-linear md:w-96 lg:w-[30rem]">
          <h3>Login</h3>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input-base input input-bordered mb-2 w-full placeholder:font-poppins placeholder:text-lg"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-base input input-bordered mb-8 w-full placeholder:font-poppins placeholder:text-lg"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              onClick={() => {
                handleLoginClick();
              }}
              type="button"
              className="btn btn-neutral btn-block font-poppins text-base font-light  sm:text-lg"
            >
              Login
            </button>
          </form>
          <div className="divider">OR</div>
          <button
            className="p btn btn-primary btn-block font-poppins text-base font-light  text-white sm:text-lg"
            type="submit"
            // onClick={signInWithGoogle}
          >
            {" "}
            <AiOutlineGoogle size={25} /> &nbsp; Login with Google
          </button>
          <div className="my-1 flex">
            <Link to="/forgot">Forgot Password</Link>
          </div>

          <div className="mt-4 flex items-end justify-center text-sm sm:items-center sm:text-base">
            <p>Don't have an account?</p>
            <Link to="/register">
              {" "}
              <span className="link-hover link-primary link">
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
