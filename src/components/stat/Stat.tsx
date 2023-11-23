import React from "react";
import { FaRegStar, FaUsers } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GrGift } from "react-icons/gr";

function Stat() {
    return (
        <section className="bg-base-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 p-4">
            <div className="stats shadow-lg w-72 sm:w-full  mx-auto h-40">
                <div className="stat flex justify-center items-center flex-col gap-1">
                    <div className="stat-value flex gap-4">
                        <FaUsers /> <span className="">3700+</span>
                    </div>
                    <div className="stat-title text-2xl font-semibold">
                        Followers
                    </div>
                </div>
            </div>
            <div className="stats shadow-lg w-72 sm:w-full mx-auto h-40">
                <div className="stat flex justify-center items-center flex-col gap-1">
                    <div className="stat-value flex gap-4">
                        <GrGift /> <span className="">76</span>
                    </div>
                    <div className="stat-title text-2xl font-semibold">
                        Products
                    </div>
                </div>
            </div>
            <div className="stats shadow-lg w-72 sm:w-full mx-auto h-40">
                <div className="stat flex justify-center items-center flex-col gap-1">
                    <div className="stat-value flex gap-4">
                        <FaRegStar /> 4.9 / 5
                    </div>
                    <div className="stat-title text-2xl font-semibold">
                        Ratings
                    </div>
                </div>
            </div>
            <div className="stats shadow-lg w-72 sm:w-full mx-auto h-40">
                <div className="stat flex justify-center items-center flex-col gap-1">
                    <div className="stat-value flex gap-4">
                        <IoChatboxEllipsesOutline /> 88%
                    </div>
                    <div className="stat-title text-2xl font-semibold">
                        Response Rate
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stat;
