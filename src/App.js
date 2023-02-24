import React from "react";
import Home from "./pages/home/Home";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    );
}

export default App;
