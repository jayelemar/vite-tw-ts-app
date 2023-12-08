import React from "react";
import { loginUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../../utils/redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = {
        isLoggedIn: false,
        name: "",
        email: "",
        password: "",
        user: null
    };

    const handleLogoutClick = async () => {
        await loginUser(userData);
        await dispatch(SET_LOGIN(false));
        await dispatch(SET_NAME(""));
        navigate("/login");
    };

    return (
        <header>
            <h3>
                <span className="font-light">Welcome,</span>
                <span className="text-error">Zino</span>
            </h3>
            <button className="btn btn-error" onClick={handleLogoutClick}>
                Logout
            </button>
        </header>
    );
}

export default AdminHeader;
