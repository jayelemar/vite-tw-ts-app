import React from "react";
import { SiShopee } from "react-icons/si";
import { AiFillFacebook } from "react-icons/ai";
import lazadaLogo from "../../assets/lazada-logo.png";

const About = () => {
  return (
    <section id="about" className="mt-96 bg-red-400 p-8">
      <h4 className="text-white">Contact Details</h4>
      <div className="flex flex-col text-white sm:flex-row">
        <div className="mb-5">
          <p className="my-2 text-base md:text-xl">
            <span className="block text-lg font-bold">Address: </span> 558,
            Bulakan, 3017 Bulacan
          </p>
          <p className="my-2 text-base md:text-xl">
            <span className="block text-lg font-bold">Hours: </span> Monday -
            Friday, 10AM - 6PM
          </p>
          <p className="my-2 text-base md:text-xl">
            <span className="block text-lg font-bold">Email Address:</span>{" "}
            bulakenya.giftshop@gmail.com
          </p>
        </div>
        <div className="relative mb-0 sm:left-32 lg:left-44">
          <h4 className="ml-5 hidden text-2xl text-white md:block">Social</h4>
          <div className="flex w-full items-center justify-start p-3 hover:cursor-default">
            <a
              href="https://web.facebook.com/bulakenya.giftshop"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook Page Link"
            >
              <AiFillFacebook
                size={52}
                className="mx-1 rounded-full text-white hover:cursor-pointer"
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
                className="@apply relative bottom-1 mx-6 my-4 text-white hover:cursor-pointer md:mx-16"
              />
            </a>
            <a
              href="https://www.lazada.com.ph/shop/bulakenya-gift-shop"
              target="_blank"
              rel="noreferrer noopener"
              className="h-[45px] w-[45px]"
            >
              <img
                src={lazadaLogo}
                alt="lazada-logo"
                className="h-full w-full hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
