import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

function Hero() {
    const backgroundImage = async () => {
        try {
            const res = await axios.get(
                "https://res.cloudinary.com/dbjn51v3x/image/upload/v1700153330/bulakenya-giftshop/large_oval_brush_1_mkuyr0.jpg",
                {
                    responseType: "blob"
                }
            );
            // console.log("Image data:", res.data);
            const blobData = new Blob([res.data]);
            const dataUrl = URL.createObjectURL(blobData);
            return dataUrl;
        } catch (error) {
            console.error("Error fetching image:", error);
            throw error;
        }
    };

    const { data: imageData, error, isLoading } = useQuery(
        "image",
        backgroundImage
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        const errorMessage = (error as Error).message;
        return <p>Error: {errorMessage}</p>;
    }

    return (
        <section
            className="hero min-h-screen mt-18"
            style={{
                backgroundImage: `url(${imageData})`
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
                    <Link to="/product">
                        <button className="btn btn-wide bg-red-600 font-poppins font-light text-lg text-white border-none hover:bg-red-700 ">
                            Explore Store
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
