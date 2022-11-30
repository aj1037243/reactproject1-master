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
import Register from './components/Register';

let isLoggedIn = false;
let routes;

const App = () => {
    
    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route path='/' element={<Main />}>
                <Route index element={<Home />} />
                </Route>
                <Route path="/Home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/more_info" element={<MoreInformation />} />
                <Route path="/locations" element={<Locations loginstatus={isLoggedIn} />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/Register" element={<Register />} />


            </Routes>
        );
    } else {
        routes = (
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/Home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/more_info" element={<MoreInformation />} />
                <Route path="/locations" element={<Locations loginstatus={isLoggedIn} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/Register" element={<Register />} />

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