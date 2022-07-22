import React from "react";
import "./index.css";
import {Navigate, Route, Routes} from "react-router-dom";

import Index from "/Users/dhruvkanthpuli/Documents/wdcc/internshiphunter/client/src/components/Signup";
import Index from "/Users/dhruvkanthpuli/Documents/wdcc/internshiphunter/client/src/components/Login";

const Home = () => {
    return (
        <Routes>
            <Route path="/signup" exact element={<Index />} />
            <Route path="/login" exact element={<Index />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
    );
};

export default Home;
