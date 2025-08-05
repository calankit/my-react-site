// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";


// Website Components
import Nav from "./My-Components/Web-site/Nav";
import Slider from "./My-Components/Web-site/Slider";
import About from "./My-Components/Web-site/About";
import Services from "./My-Components/Web-site/Services";
import UpdateContact from "./My-Components/Web-site/UpdateContact";
import Footer from "./My-Components/Web-site/Footer";

// Admin Components
import Login from "./My-Components/Admin-Panel/Login";
import Dashboard from "./My-Components/Admin-Panel/Dashboard";
import AddSlider from "./My-Components/Admin-Panel/AddSlider";
import ViewSlider from "./My-Components/Admin-Panel/ViewSlider";
import AddService from "./My-Components/Admin-Panel/AddService";
import ViewService from "./My-Components/Admin-Panel/ViewService";
import AddAbout from "./My-Components/Admin-Panel/AddAbout";
import Settings from "./My-Components/Admin-Panel/ Settings";
import Update from "./My-Components/Admin-Panel/Update";

// Admin Layout
import AdminLayout from "./My-Components/Admin-Panel/AdminLayout";

function WebsiteLayout() {
    return (
        <>
            <Nav />
            <Slider />
            <About />
            <Services />
            <UpdateContact />
            <Footer />
            <main className="container mt-4">
                <Outlet />
            </main>
        </>
    );
}


function App() {
    return (
        <Router>
            <Routes>
                {/* Website Routes */}
                <Route path="/" element={<WebsiteLayout />}>
                   
                </Route>

                {/* Admin Login */}
                <Route path="/login" element={<Login />} />

                {/* Admin Routes with layout */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="addslider" element={<AddSlider />} />
                    <Route path="viewslider" element={<ViewSlider />} />
                    <Route path="addservice" element={<AddService />} />
                    <Route path="viewservice" element={<ViewService />} />
                    <Route path="addabout" element={<AddAbout />} />
                    <Route path="setting" element={<Settings />} />
                    <Route path="Update" element={<Update />} />
                </Route>

                {/* Optional: catch-all route for 404 - you can add later */}
            </Routes>
        </Router>
    );
}

export default App;
