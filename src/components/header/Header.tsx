import React from "react";
import logo from "../../assets/bulakenya-logo.png";
import { Navbar, NavList } from "../index";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="navbar bg-base-100 p-0 justify-between fixed top-0 w-full max-w-7xl z-10">
                <Link
                    to="/"
                    className="navbar-start btn btn-ghost text-xl p-0 w-64 sm:w-96 flex justify-start items-center mb-2 mx-5 "
                >
                    <img src={logo} alt="logo" width={50} />
                    <h5 className="text-lg md:text-2xl pt-2">
                        Bulakenya Gift Shop
                    </h5>
                </Link>
                <nav className="hidden md:flex">
                    <NavList />
                </nav>
                <nav className="flex md:hidden">
                    <Navbar />
                </nav>
            </div>
        </header>
    );
}

export default Header;
