import React from "react";
import image404 from "../../assets/not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="flex items-center justify-center flex-col bg-base-100 pl-2 lg:pl-8 gap-12 h-screen-90">
            <img src={image404} width={300} alt="not-found.img" />
            <div className="flex flex-col gap-y-1 justify-center items-center">
                <h2 className="text-center text-2xl lg:text-3xl">
                    Oops! Page Not Found
                </h2>
                <p>We are sorry, the page you were looking doesn't exist.</p>
                <Link to="/">
                    <button className="btn btn-neutral inline-block mx-auto w-full mt-6 font-poppins font-light text-lg">
                        Back to Home
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
