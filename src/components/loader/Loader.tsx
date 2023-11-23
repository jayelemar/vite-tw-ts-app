import React from "react";
import ReactDOM from "react-dom";
import loaderImg from "../../assets/loader.gif";

const Loader = () => {
    const loaderElement = document.getElementById("loader");

    if (!loaderElement) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="fixed w-screen h-screen bg-black bg-opacity-70 z-40">
            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <img src={loaderImg} alt="Loading..." width={100} />
            </div>
        </div>,
        loaderElement as Element
    );
};

export default Loader;
