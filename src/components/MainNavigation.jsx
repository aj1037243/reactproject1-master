import React from 'react';
import '../css/MainNavigation.css'
//
import Header from './Header';
import NavLinks from './NavLinks';

const MainNavigation = props => (
    <React.Fragment>
        <Header>
            <h1 className='title'>Athens Tourism</h1>
            <nav className='header-nav-links'><NavLinks loginstatus={props.loginstatus} /></nav>
        </Header>
        
    </React.Fragment>
);

export default MainNavigation;