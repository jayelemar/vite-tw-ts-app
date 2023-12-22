import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ModalContext, { ModalContextProps } from "../../store/context/modalContext";
import { ShowOnLogin, ShowOnLogout } from "../protect/hiddenLinks";
import { logoutUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../../store/redux/feature/authSlice";
import { toast } from "react-toastify";


function NavList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { openModal } = useContext(ModalContext) as ModalContextProps;
    const handleInquireClick = () => {
        openModal();
    };

    function closeNavbar() {
        document.getElementById("my-drawer-4")?.click();
    } 

    const handleLogoutClick = async () => {
        closeNavbar();
        await logoutUser();
        await dispatch(SET_NAME(""));
        await dispatch(SET_LOGIN(false));
        navigate("/login");
        toast.success("You have successfully log-out.")
    };
    return (
        <ul className="menu p-4 min-h-full bg-base-200 md:bg-transparent text-base-content flex md:flex-row md:justify-end min-w-32 items-center flex-nowrap">
            { location.pathname === "/" ?
                <li className="text-lg md:text-base lg:text-lg mt-40 md:mt-0 mr-0 md:mr-2">
                    <Link to="/" onClick={closeNavbar}>
                        Home
                    </Link>
                </li>
            : null
            }
            {location.pathname === "/product" ?  null :
                <li className="text-lg md:text-base lg:text-lg md:mt-0 mr-0 md:mr-2">
                    <Link to="/product" onClick={closeNavbar}>
                        Shop
                    </Link>
                </li>
            }


            {location.pathname === "/" ?
                <>
                <li className="text-lg md:text-base lg:text-lg mt-0 md:mt-0  mr-0 md:mr-2 ">
                    <a href="#about" data-te-smooth-scroll-init onClick={closeNavbar}>
                        About Us
                    </a>
                </li>
                <li className="text-lg md:text-base lg:text-lg mt-4 md:mt-0  mr-0 md:mr-2 rounded-lg" >
                    <a 
                        onClick={ () => {
                            handleInquireClick();
                            closeNavbar();
                        }} 
                        data-te-smooth-scroll-init 
                        className="text-base-content hover:text-base-content "
                    >
                        Inquire
                    </a>
                </li>

                
                </>
            : null
            }
            <ShowOnLogout>
                {location.pathname === "/login" ? null : 
                    <li className="text-lg md:text-base lg:text-lg mt-4 md:mt-0  mr-0 md:mr-2 bg-error  rounded-lg" >
                        <Link 
                            to="/login"
                            onClick={ () => {
                                closeNavbar();
                                
                            }} 
                            data-te-smooth-scroll-init 
                            className="text-white hover:text-white"
                        >
                            Login
                    </Link>
                    </li>
                }

                </ShowOnLogout>
                <ShowOnLogin>
                <li className="text-lg md:text-base lg:text-lg mt-4 md:mt-0  mr-0 md:mr-2 bg-error  rounded-lg" >
                    <Link 
                        to="/"
                        onClick={handleLogoutClick} 
                        data-te-smooth-scroll-init 
                        className="text-white hover:text-white"
                    >
                        Logout
                    </Link>
                </li>
                </ShowOnLogin>
        </ul>
    );
}

export default NavList;
