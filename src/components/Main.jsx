import React from 'react';
import {Outlet} from 'react-router-dom';
import '../css/Main.css';

const Main = props => (
    <div className='main-body'>
        <Outlet/>
    </div>
);

export default Main; 