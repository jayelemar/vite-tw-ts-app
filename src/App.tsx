import React from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { About, Hero, Product } from "./pages";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Product />
            <About />
            <Footer />
        </>
    );
}

export default App;
