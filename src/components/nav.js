import React from "react";
import "../styles/navbarStyles.css";

function Navbar() {
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
