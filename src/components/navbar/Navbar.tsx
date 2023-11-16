import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const NavList = (
    <ul className="menu p-4 min-h-full bg-base-200 sm:bg-transparent text-base-content flex sm:flex-row sm:justify-end min-w-[30] items-center flex-nowrap">
        <li>
            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm max-w-xs mr-1 flex md:hidden lg:flex"
            />
        </li>

        <li className="text-lg sm:text-base lg:text-lg mt-40 sm:mt-0">
            <a>Products</a>
        </li>
        <li className="text-lg sm:text-base lg:text-lg">
            <a>About Us</a>
        </li>
        <li className="text-lg sm:text-base lg:text-lg">
            <a>Send an Inquiry</a>
        </li>
    </ul>
);

function Navbar() {
    return (
        <nav>
            <div className="drawer drawer-end z-50">
                <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-button btn btn-square glass mr-2"
                    >
                        <AiOutlineMenu size={30} />
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    {NavList}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
