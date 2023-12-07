import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import loaderImg from "../../assets/loader.gif";

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);
    const loaderElement = document.getElementById("loader");

    useEffect(() => {
        console.log("useEffect is running");
        const timer = setTimeout(() => {
            console.log("Hiding loader");
            setShowLoader(false);
        }, 10000);

        return () => {
            console.log("Clearing timer");
            clearTimeout(timer);
        };
    }, []);
    if (!loaderElement || !showLoader) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed w-screen h-screen bg-black z-50">
            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <img src={loaderImg} alt="Loading..." width={100} />
            </div>
        </div>,
        loaderElement as Element
    );
};

export const SpinnerImg = () => {
    return (
        <div className="">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default Loader;
