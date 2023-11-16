import React from "react";

function Hero() {
    return (
        <section
            className="hero min-h-screen "
            style={{
                backgroundImage:
                    "url(https://res.cloudinary.com/dbjn51v3x/image/upload/v1700153330/bulakenya-giftshop/large_oval_brush_1_mkuyr0.jpg"
            }}
        >
            <div className="hero-overlay rounded-2xl bg-opacity-40 h-1/3 w-3/4 sm:h-1/2 sm:w-3/4"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[15rem] sm:max-w-lg">
                    <h1 className="mb-5 font-bold text-3xl sm:text-5xl text-neutral-200">
                        Gifts & party needs for your Beloved
                    </h1>
                    <p className="mb-5 text-2xl text-neutral-content text-white hidden sm:flex ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi.
                    </p>
                    <button className="btn btn-md sm:btn-wide bg-red-500 text-white border-none hover:bg-slate-700">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
