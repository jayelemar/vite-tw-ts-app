import React, { createContext, useState, ReactNode } from "react";

interface SidebarContextType {
    isOpen: boolean;
    expandMenu: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}
interface ProviderProps {
    children: ReactNode;
}

const SideBarContext = createContext<SidebarContextType | undefined>(undefined);

export const SideBarContextProvider: React.FC<ProviderProps> = ({
    children
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [expandMenu, setExpandMenu] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
        setExpandMenu(false);
    };

    const openSidebar = () => {
        setIsOpen(true);
    };

    return (
        <SideBarContext.Provider
            value={{
                isOpen,
                expandMenu,
                toggleSidebar,
                closeSidebar,
                openSidebar
            }}
        >
            {children}
        </SideBarContext.Provider>
    );
};

export default SideBarContext;
