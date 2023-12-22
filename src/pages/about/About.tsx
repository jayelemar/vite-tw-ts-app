import React from "react";
import { SiShopee } from "react-icons/si";
import { AiFillFacebook } from "react-icons/ai";
import lazadaLogo from "../../assets/lazada-logo.png";

const About = () => {
    return (
        <section id="about" className="bg-red-400 p-8 mt-96">
            <h4 className="text-white">Contact Details</h4>
            <div className="flex flex-col sm:flex-row text-white">
                <div className="mb-5">
                    <p className="my-2 text-base md:text-xl">
                        <span className="block font-bold text-lg">
                            Address:{" "}
                        </span>{" "}
                        558, Bulakan, 3017 Bulacan
                    </p>
                    <p className="my-2 text-base md:text-xl">
                        <span className="block font-bold text-lg">Hours: </span>{" "}
                        Monday - Friday, 10AM - 6PM
                    </p>
                    <p className="my-2 text-base md:text-xl">
                        <span className="block font-bold text-lg">
                            Email Address:
                        </span>{" "}
                        bulakenya.giftshop@gmail.com
                    </p>
                </div>
                <div className="mb-0 relative sm:left-32 lg:left-44">
                    <h4 className="text-white ml-5 text-2xl hidden md:block">
                        Social
                    </h4>
                    <div className="flex w-full justify-start items-center p-3 hover:cursor-default">
                        <a
                            href="https://web.facebook.com/bulakenya.giftshop"
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Facebook Page Link"
                        >
                            <AiFillFacebook
                                size={52}
                                className="rounded-full text-white mx-1 hover:cursor-pointer"
                            />
                        </a>
                        <a
                            href="https://shopee.ph/bulakenya_giftshop"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:cursor-default"
                            title="Facebook Link"
                        >
                            <SiShopee
                                size={47}
                                className="@apply text-white relative bottom-1 mx-6 md:mx-16 my-4 hover:cursor-pointer"
                            />
                        </a>
                        <a
                            href="https://www.lazada.com.ph/shop/bulakenya-gift-shop"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="w-[45px] h-[45px]"
                        >
                            <img
                                src={lazadaLogo}
                                alt="lazada-logo"
                                className="hover:cursor-pointer w-full h-full"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
