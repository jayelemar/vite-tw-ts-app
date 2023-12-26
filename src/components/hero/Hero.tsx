import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="mt-12">
      <div className="hero min-h-screen bg-red-100 p-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://res.cloudinary.com/dbjn51v3x/image/upload/v1700152674/bulakenya-giftshop/bamboo_notebook_2_tglwwv.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-error font-poppins text-lg font-light text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
