import React from "react";
import logo from "../../assets/bulakenya-logo.png";
import { Navbar, NavList } from "../index";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="navbar fixed top-0 z-10 w-full max-w-7xl justify-between bg-base-100 p-0">
        <Link
          to="/"
          className="btn btn-ghost navbar-start mx-5 mb-2 flex w-64 items-center justify-start p-0 text-xl sm:w-96 "
        >
          <img src={logo} alt="logo" width={50} />
          <h5 className="pt-2 text-lg md:text-2xl">Bulakenya Gift Shop</h5>
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
