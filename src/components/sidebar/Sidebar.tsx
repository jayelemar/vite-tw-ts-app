import React, { useState } from "react";
import { LayoutProps } from "../layout/Layout";
import logo from "./../../assets/bulakenya-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import menu from "../../data/Sidebar";

function Sidebar({ children }: LayoutProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div
                className={`fixed top-0 left-0 w-60 h-[100vh] flex-shrink-0 bg-slate-50  text-slate-700 overflow-auto transition-all duration-500 ${
                    isOpen ? "w-60" : "w-16"
                }`}
            >
                <div className="flex items-center  px-2 transition-all duration-500 bg-blue-400 h-12">
                    <div className={isOpen ? "block" : "hidden"}>
                        <img
                            src={logo}
                            alt="logo"
                            width={35}
                            className="cursor-pointer"
                        />
                    </div>
                    <div onClick={toggleSidebar}>
                        <HiMenuAlt3
                            size={28}
                            className={`cursor-pointer transition-all duration-500 ${
                                isOpen ? "ml-40" : "ml-3"
                            }`}
                        />
                    </div>
                </div>
                {menu.map(
                    (item, index): React.ReactNode => {
                        return (
                            <SidebarItem
                                key={index}
                                item={item}
                                isOpen={isOpen}
                            />
                        );
                    }
                )}
            </div>
            <main
                className={`transition-all duration-500 w-full bg-slate-100 ${
                    isOpen ? "pl-60" : "pl-16"
                }`}
            >
                {children}
            </main>
        </div>
    );
}

export default Sidebar;
