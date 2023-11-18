import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavList from "./NavList";

function Navbar() {
    const [checked, setChecked] = useState(false);

    return (
        <nav>
            <div className="drawer drawer-end z-50">
                <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <div className="drawer-content">
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-button btn btn-square glass mr-2"
                    >
                        <AiOutlineMenu size={30} />
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <NavList />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
