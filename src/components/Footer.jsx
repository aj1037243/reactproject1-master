import React from 'react';
import '../css/Footer.css';

let loggedstate;

const Footer = props => {

    if (props.loginstatus) {
        loggedstate = (
            <footer className='footer-loggedin'>
                <h3>Explore Athens!!</h3>
                <h5>Add Dynamically to our ever growing list</h5>
                <h5>Athens is always there. But you have to look!</h5>
            </footer>            
        );
    } else {
        loggedstate = (
            <footer className='footer-loggedout'>
                <h3>Explore Athens!!</h3>
                <h5>Add Dynamically to our ever growing list</h5>
                <h5>Athens is always there. But you have to look!</h5>
                <div className="button">
                    <a href="/Register">SIGN UP NOW!</a>
                </div>
            </footer>
        );
    }

    return loggedstate;
};

export default Footer;