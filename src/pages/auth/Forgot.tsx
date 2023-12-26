import React, { useState } from "react";
import loginImg from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, validateEmail } from "../../services/authService";
import { toast } from "react-toastify";

interface ForgotPasswordProps {
  email: string;
}

function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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
    const userData: ForgotPasswordProps = { email };

    await forgotPassword(userData);
    setEmail("");
    navigate("/");
  };

  return (
    <>
      <section className="slide-up h-screen-90 flex items-center justify-center bg-slate-50 px-5">
        <div className="mx-10 hidden duration-500 ease-linear md:flex">
          <img src={loginImg} alt="login-img" width={400} />
        </div>
        <div className="w-full p-6 px-5 shadow-xl duration-500 ease-linear md:w-96 lg:w-[30rem]">
          <h3>Forgot Password</h3>
          <form onSubmit={forgot}>
            <input
              type="text"
              placeholder="Email"
              className="input-base input input-bordered mb-2 w-full placeholder:font-poppins placeholder:text-lg"
              value={email}
              onChange={handleInputChange}
            />
            <button className="btn btn-block bg-slate-300 font-poppins text-lg font-light">
              Get Reset Email
            </button>
          </form>
          <div className="mt-3 flex items-center justify-between">
            <Link to="/">
              {" "}
              <span className="link-hover link-primary link">Home</span>
            </Link>
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

export default Forgot;
