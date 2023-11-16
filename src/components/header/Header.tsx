import React from "react";
import logo from "../../assets/bulakenya-logo.png";
import Navbar, { NavList } from "../navbar/Navbar";

function Header() {
    return (
        <header className="navbar bg-base-100 p-0 justify-between">
            <div className="navbar-start btn btn-ghost flex text-xl p-0 w-60 sm:w-96 flex justify-start mb-2 items-center">
                <img src={logo} alt="logo" width={50} />
                <h5 className="text-lg md:text-2xl">Bulakenya Gift Shop</h5>
            </div>
            <div className="hidden sm:flex">{NavList}</div>
            <div className="flex sm:hidden">
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
