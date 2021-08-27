import React from 'react';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Menu from "./Menu";
import AppFood from "./AppFood";
import Contact from "./Contact";

function Main(props) {
    return (
        <div>
            <Home/>
            <About/>
            <Services/>
            <Menu/>
            <AppFood/>
            <Contact/>
        </div>
    );
}

export default Main;