import React from "react";
import image404 from "../../assets/not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-screen-90 flex flex-col items-center justify-center gap-12 bg-base-100 pl-2 lg:pl-8">
      <img src={image404} width={300} alt="not-found.img" />
      <div className="flex flex-col items-center justify-center gap-y-1">
        <h2 className="text-center text-2xl lg:text-3xl">
          Oops! Page Not Found
        </h2>
        <p>We are sorry, the page you were looking doesn't exist.</p>
        <Link to="/">
          <button className="btn btn-neutral mx-auto mt-6 inline-block w-full font-poppins text-lg font-light">
            Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
