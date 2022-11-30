
//Errors are caused when this file is in use,
//Work on it after we do userRegistraion and Login
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import '../css/Locations.css'


function DisplayUserContent() {
    const [getContent, setContents] = useState([{
        title: '',
        description: '',
        imageURL: '',
        address: ''
        
    }])
    //get db content
    useEffect(() => {
        axios.get("http://localhost:3001/getContent").then(res=> {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setContents(jsonRes));
    })     

    
    return <div className='loc-container' key="classKey">
        <h1 key="content.id">Content Section</h1>
        {getContent.map(content =>
        <div key="div1">
        <img src={'https://www.collegegridirons.com/wp-content/uploads/2017/05/sanford17953.jpg'} key="content.pictureURL"  alt="invalid URL"></img>
        <h2 key="content.title">{content.title}</h2>
        <div key='div2'>
                <p key="content.description">{content.description}</p>
                <p key="content.address"><b>Address: </b>{content.address}</p>
        </div>
    </div>
    )}
    </div>
}

export default DisplayUserContent;