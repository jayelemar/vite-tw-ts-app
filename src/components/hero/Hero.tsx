import React from "react";

function Hero() {
    return (
        <section
            className="hero min-h-screen mt-18"
            style={{
                backgroundImage:
                    "url(https://res.cloudinary.com/dbjn51v3x/image/upload/v1700153330/bulakenya-giftshop/large_oval_brush_1_mkuyr0.jpg"
            }}
        >
            <div className="hero-overlay rounded-2xl bg-opacity-40 md:bg-opacity-30 h-1/3 w-3/4 md:h-3/5 md:w-3/5 mt-16"></div>
            <div className="hero-content text-center text-neutral-content mt-16">
                <div className="max-w-[15rem] sm:max-w-lg">
                    <h1 className="mb-5 font-bold text-3xl md:text-5xl text-neutral-200">
                        Gifts & party needs for your Beloved
                    </h1>
                    <p className="mb-5 text-2xl text-white hidden md:flex ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi.
                    </p>
                    <button className="btn btn-md sm:btn-wide bg-red-500 text-white text-xl border-none hover:bg-red-600  ">
                        Explore Store
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
