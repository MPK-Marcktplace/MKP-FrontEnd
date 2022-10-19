import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home";
import Departments from "../pages/Departments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../pages/Profile";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/departments" element={<Departments/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<Navigate to='/home'/> }/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
};

export default RoutesApp;