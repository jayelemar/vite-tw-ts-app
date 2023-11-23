import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer, Header, Layout, Sidebar } from "./components";
import { Home, NotFound, Product, Dashboard } from "./pages";
import { Forgot, Login, Register, Reset } from "./pages/auth";

function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/dashboard");

    return (
        <>
            {isAdminRoute ? null : <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
                {/* <Route path="/resetpassword/:resetToken" element={<Reset />} /> */}
                <Route path="/resetpassword" element={<Reset />} />

                <Route
                    path="/dashboard"
                    element={
                        <Sidebar>
                            <Layout>
                                <Dashboard />
                            </Layout>
                        </Sidebar>
                    }
                />
            </Routes>
            {isAdminRoute ? null : <Footer />}
            <ToastContainer />
        </>
    );
}

export default App;
