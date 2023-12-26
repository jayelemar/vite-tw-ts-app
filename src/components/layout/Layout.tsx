import React, { ReactNode } from "react";
import AdminHeader from "../header/AdminHeader";
import Footer from "../footer/Footer";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <AdminHeader />
      <div className="h-screen-90">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
