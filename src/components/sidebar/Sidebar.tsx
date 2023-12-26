import React, { useContext } from "react";
import { LayoutProps } from "../layout/Layout";
import logo from "./../../assets/bulakenya-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import menu from "../../data/Sidebar";
import SideBarContext from "../../store/context/sidebarContext";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

function Sidebar({ children }: LayoutProps) {
  const context = useContext(SideBarContext);
  const { isOpen, toggleSidebar } = context ?? {};
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex">
      <div
        className={`fixed left-0 top-0 h-[100vh] flex-shrink-0 overflow-auto  bg-slate-50 text-slate-700 transition-all duration-500 ${
          isOpen ? "w-full sm:w-60" : "w-14"
        } `}
      >
        <div className="flex h-12  items-center bg-blue-400 pl-3 transition-all duration-500">
          <div className={isOpen ? "block" : "hidden"}>
            <img
              src={logo}
              alt="logo"
              width={35}
              className="cursor-pointer"
              onClick={goHome}
            />
          </div>
          <div
            onClick={toggleSidebar}
            className={`${isOpen ? "w-full" : "w-14"}`}
          >
            <HiMenuAlt3
              size={28}
              className={`cursor-pointer transition-all duration-500  ${
                isOpen ? "ml-auto mr-2" : "ml-1"
              }`}
            />
          </div>
        </div>
        {menu.map((item, index): React.ReactNode => {
          return (
            <SidebarItem key={index} item={item} isOpen={isOpen ?? false} />
          );
        })}
      </div>
      <main
        className={`w-full bg-slate-100 transition-all duration-500 ${
          isOpen ? "pl-60" : "pl-14"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
