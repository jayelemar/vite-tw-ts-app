import React from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, NotFound, Product } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Forgot, Login, Register, Reset } from "./pages/auth";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
                {/* <Route path="/resetpassword/:resetToken" element={<Reset />} /> */}
                <Route path="/resetpassword" element={<Reset />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
