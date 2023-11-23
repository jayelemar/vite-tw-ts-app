import React, { useState } from "react";
import { LayoutProps } from "../layout/Layout";
import logo from "./../../assets/bulakenya-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
// import menu from "../../data/Sidebar";
// import SidebarItem from "./SidebarItem";

function Sidebar({ children }: LayoutProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className='fixed top-0 left-0 w-${isOpen ? "32" : "12"} h-screen flex-shrink-0 bg-white overflow-auto text-slate-600 transition-all duration-500'>
                <div className="flex items-center  p-2 md:p-4 transition-all duration-500 bg-error h-16">
                    <div
                        className={`flex justify-between items-center text-3xl text-slate-600 ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            width={40}
                            className="cursor-pointer"
                        />
                        <div
                            className={`flex items-center text-25  cursor-pointer text-black transition-all duration-300 ${
                                isOpen ? "ml-16" : "ml-8"
                            }`}
                            onClick={toggle}
                        >
                            <HiMenuAlt3 />
                        </div>
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar;
