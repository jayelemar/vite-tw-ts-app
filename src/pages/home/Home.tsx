import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../about/About";
import Contact from "../contact/Contact";
import { Stat } from "../../components";

function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Stat />
            <Contact />
        </main>
    );
}

export default Home;
