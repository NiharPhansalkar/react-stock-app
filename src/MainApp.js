import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav";

function MainApp() {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/"></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainApp;
