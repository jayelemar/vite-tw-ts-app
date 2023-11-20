import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../about/About";
import Contact from "../contact/Contact";

function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Contact />
        </main>
    );
}

export default Home;
