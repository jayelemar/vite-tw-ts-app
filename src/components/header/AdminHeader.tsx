import React from "react";
import { logoutUser } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { SET_NAME, selectName } from "../../store/redux/feature/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
useSelector

function AdminHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector(selectName)

    const handleLogoutClick = async () => {
        await logoutUser();
        await dispatch(SET_NAME(""));
        navigate("/login");
        toast.success("You have successfully log-out.")
    };

    return (
        <header>
            <h3>
                <span className="font-light">Welcome,</span>
                <span className="text-error">{name}</span>
            </h3>
            <button className="btn btn-error" onClick={handleLogoutClick}>
                Logout
            </button>
        </header>
    );
}

export default AdminHeader;
