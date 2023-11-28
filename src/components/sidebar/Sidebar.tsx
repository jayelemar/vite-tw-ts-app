import React, { useContext } from "react";
import { LayoutProps } from "../layout/Layout";
import logo from "./../../assets/bulakenya-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import menu from "../../data/Sidebar";
import SideBarContext from "../../utils/context/sidebarContext";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";


function Sidebar({ children }: LayoutProps) {

    const context =  useContext(SideBarContext);
    const { isOpen, toggleSidebar } = context ?? {};
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    };

    return (
        <div className="flex">
            <div
                className={`fixed top-0 left-0 h-[100vh] flex-shrink-0 bg-slate-50  text-slate-700 overflow-auto transition-all duration-500 ${ isOpen ? "w-full sm:w-60" : "w-14"} `}
            >
                <div className="flex items-center  pl-3 transition-all duration-500 bg-blue-400 h-12">
                    <div className={isOpen ? "block" : "hidden"}>
                        <img
                            src={logo}
                            alt="logo"
                            width={35}
                            className="cursor-pointer"
                            onClick={goHome}
                        />
                    </div>
                    <div onClick={toggleSidebar} className={`${isOpen ? "w-full" : "w-14"}`}>
                        <HiMenuAlt3
                            size={28}
                            className={`cursor-pointer transition-all duration-500  ${
                                isOpen ? "ml-auto mr-2" : "ml-1"
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
                                isOpen={isOpen ?? false}
                            />
                        );
                    }
                )}

            </div>
            <main
                className={`transition-all duration-500 w-full bg-slate-100 ${
                    isOpen ? "pl-60" : "pl-14"
                }`}
            >
                {children}
            </main>
            
        </div>
    );
}

export default Sidebar;
