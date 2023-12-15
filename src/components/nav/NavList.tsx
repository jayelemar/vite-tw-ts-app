import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ModalContext, { ModalContextProps } from "../../store/context/modalContext";


function NavList() {
    
        const { openModal } = useContext(ModalContext) as ModalContextProps;
        const handleClick = () => {
            openModal();
        };
    
        function closeNavbar() {
            document.getElementById("my-drawer-4")?.click();
        
    

    } 
    return (
        <ul className="menu p-4 min-h-full bg-base-200 md:bg-transparent text-base-content flex md:flex-row md:justify-end min-w-32 items-center flex-nowrap">
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
                    Shop
                </Link>
            </li>
            <li className="text-lg md:text-base lg:text-lg mt-0 md:mt-0  mr-0 md:mr-2 ">
                <a href="#about" data-te-smooth-scroll-init onClick={closeNavbar}>
                    About Us
                </a>
            </li>
            <li className="text-lg md:text-base lg:text-lg mt-4 md:mt-0  mr-0 md:mr-2 bg-error  rounded-lg" >
                <a 
                    onClick={ () => {
                        handleClick();
                        closeNavbar();
                    }} 
                    data-te-smooth-scroll-init 
                    className="text-white hover:text-white"
                >
                    Inquire
                </a>
            </li>
        </ul>
    );
}

export default NavList;
