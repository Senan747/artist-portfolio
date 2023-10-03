import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Arts from "./Arts";

function Pages () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resmler" element={<Arts />}/>
        </Routes>
    )
}

export default Pages;   