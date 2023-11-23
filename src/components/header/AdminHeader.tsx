import React from "react";

function AdminHeader() {
    return (
        <header>
            <h3>
                <span className="font-light">Welcome,</span>
                <span className="text-error">Zino</span>
            </h3>
            <button className="btn btn-error">Logout</button>
        </header>
    );
}

export default AdminHeader;
