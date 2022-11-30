import React from 'react';
import MainNavigation from './components/MainNavigation';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import MoreInformation from './components/MoreInformation';
import Locations from './components/Locations';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/Login';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

let isLoggedIn = false;
let routes;

const App = () => {
    
    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/more_info" element={<MoreInformation />} />
                <Route path="/locations" element={<Locations loginstatus={isLoggedIn} />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        );
    } else {
        routes = (
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/more_info" element={<MoreInformation />} />
                <Route path="/locations" element={<Locations loginstatus={isLoggedIn} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        );
    }

    return (
        <React.Fragment>
        <MainNavigation loginstatus={isLoggedIn} />
        <BrowserRouter>{routes}</BrowserRouter>
        <Footer loginstatus={isLoggedIn} />
        </React.Fragment>
    );
};

export default App;