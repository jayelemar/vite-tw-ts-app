import React, { useState } from "react";

export interface SideBarItemProps {
    item: {
        title: string;
        icon: React.ReactElement;
        path?: string;
        children?: {
            title: string;
            path: string;
        }[];
    };
    isOpen: boolean;
}

function SidebarItem({ item, isOpen }: SideBarItemProps) {
    const [expandMenu, setExpandMenu] = useState(false);

    return (
        <ul
            className={`menu bg-base-200 w-full p-0 [&_li>*]:rounded-none ${
                expandMenu ? "px-full" : "px-0"
            }`}
            onClick={() => setExpandMenu(!expandMenu)}
        >
            {item.children ? (
                <li>
                    <details>
                        <summary className="rounded-none">
                            {item.icon} {isOpen ? item.title : null}
                        </summary>
                        <ul>
                            {item.children.map(child => (
                                <li key={child.path}>
                                    <a href={child.path}> {child.title}</a>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            ) : (
                <li>
                    <a href={item.path}>
                        {item.icon}
                        {isOpen ? item.title : null}
                    </a>
                </li>
            )}
        </ul>
    );
}

export default SidebarItem;
