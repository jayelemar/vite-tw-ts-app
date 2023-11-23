import React from "react";
import About from "../about/About";
import { Hero, Stat } from "../../components";
import Contact from "../contact/Contact";

function Home() {
    return (
        <main>
            <Hero />
            <Stat />
            <About />
            <Contact />
        </main>
    );
}

export default Home;
