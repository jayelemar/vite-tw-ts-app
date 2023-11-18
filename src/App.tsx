import React from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, NotFound, Product } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<NotFound />} />
                <Route />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
