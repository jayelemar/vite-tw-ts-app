import React, { useContext } from "react";
import SideBarContext from "../../utils/context/sidebarContext";


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

function SidebarItem({ item }: SideBarItemProps) {
    const context =  useContext(SideBarContext);
    const { isOpen, expandMenu } = context ?? {};




    return (
        <ul
            className={`menu bg-base-200 w-full p-0 [&_li>*]:rounded-none ${
                expandMenu ? "px-full" : "px-0"
            }`}
            
        >
            {item.children ? (
                <li>
                    <details >
                        <summary className={`rounded-none whitespace-nowrap ${ !isOpen ? "after:w-0" : "10" }`}>
                            {item.icon} {isOpen ? item.title : null}
                        </summary>
                        <ul className={`${ !isOpen ? "hidden" : "block"}`}>
                            {item.children.map(child => (
                                <li key={child.path}>
                                    <a href={child.path} className="whitespace-nowrap"> {child.title}</a>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            ) : (
                <li>
                    <a className="whitespace-nowrap" href={item.path}>
                        {item.icon}
                        {isOpen ? item.title : null}
                    </a>
                </li>
            )}
        </ul>
    );
}

export default SidebarItem;
