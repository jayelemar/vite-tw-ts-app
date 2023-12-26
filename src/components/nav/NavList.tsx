import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ModalContext, {
  ModalContextProps,
} from "../../store/context/modalContext";
import { ShowOnLogin, ShowOnLogout } from "../protect/hiddenLinks";
import { logoutUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../../store/redux/feature/auth/authSlice";
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
    toast.success("You have successfully log-out.");
  };
  return (
    <ul className="min-w-32 menu flex min-h-full flex-nowrap items-center bg-base-200 p-4 text-base-content md:flex-row md:justify-end md:bg-transparent">
      {location.pathname === "/" ? (
        <li className="mr-0 mt-40 text-lg md:mr-2 md:mt-0 md:text-base lg:text-lg">
          <Link to="/" onClick={closeNavbar}>
            Home
          </Link>
        </li>
      ) : null}
      {location.pathname === "/product" ? null : (
        <li className="mr-0 text-lg md:mr-2 md:mt-0 md:text-base lg:text-lg">
          <Link to="/product" onClick={closeNavbar}>
            Shop
          </Link>
        </li>
      )}

      {location.pathname === "/" ? (
        <>
          <li className="mr-0 mt-0 text-lg md:mr-2 md:mt-0  md:text-base lg:text-lg ">
            <a href="#about" data-te-smooth-scroll-init onClick={closeNavbar}>
              About Us
            </a>
          </li>
          <li className="mr-0 mt-4 rounded-lg text-lg md:mr-2  md:mt-0 md:text-base lg:text-lg">
            <a
              onClick={() => {
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
      ) : null}
      <ShowOnLogout>
        {location.pathname === "/login" ? null : (
          <li className="mr-0 mt-4 rounded-lg bg-error text-lg  md:mr-2 md:mt-0 md:text-base  lg:text-lg">
            <Link
              to="/login"
              onClick={() => {
                closeNavbar();
              }}
              data-te-smooth-scroll-init
              className="text-white hover:text-white"
            >
              Login
            </Link>
          </li>
        )}
      </ShowOnLogout>
      <ShowOnLogin>
        <li className="mr-0 mt-4 rounded-lg bg-error text-lg  md:mr-2 md:mt-0 md:text-base  lg:text-lg">
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
