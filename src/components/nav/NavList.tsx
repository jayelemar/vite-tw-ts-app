import React from "react";
import { Link } from "react-router-dom";

function closeNavbar() {
    document.getElementById("my-drawer-4")?.click();
}

function NavList() {
    return (
        <ul className="menu p-4 min-h-full bg-base-200 md:bg-transparent text-base-content flex md:flex-row md:justify-end min-w-[30] items-center flex-nowrap">
            <li>
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered input-sm max-w-xs flex md:hidden lg:flex mr-0 md:mr-2 border-t-0 border-x-0"
                />
            </li>
            <li className="text-lg md:text-base lg:text-lg mt-40 md:mt-0 mr-0 md:mr-2">
                <Link to="/" onClick={closeNavbar}>
                    Home
                </Link>
            </li>
            <li className="text-lg md:text-base lg:text-lg md:mt-0 mr-0 md:mr-2">
                <Link to="/product" onClick={closeNavbar}>
                    Products
                </Link>
            </li>
            <li className="text-lg md:text-base lg:text-lg mt-4 md:mt-0  mr-0 md:mr-2">
                <a href="#about" data-te-smooth-scroll-init onClick={closeNavbar}>
                    About Us
                </a>
            </li>
            <li className="btn btn-outline btn-error btn-sm text-lg font-normal py-5 px-0 mt-4 md:mt-0 r 
            "  onClick={closeNavbar}>
            Send an Inquiry
            </li>
        </ul>
    );
}

export default NavList;
