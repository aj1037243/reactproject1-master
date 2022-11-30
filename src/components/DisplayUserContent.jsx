/**
 * Errors are caused when this file is in use,
 * Work on it after we do userRegistraion and Login
 * import React, { useEffect } from 'react'
import { useState } from 'react';
import Content from '../models/contentModel';

Content = new Content();
function DisplayUserContent() {
    const [contents, setContents] = useState([{
        title: '',
        description: '',
        imageURL: '',
        address: ''
        
    }])

    useEffect(() => {
        fetch("/contents").then(res=> {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setContents(jsonRes));
    })
    
 
}
  
        


export default DisplayUserContent;
/**return ( 
    <div className="alone">
    <h2>Title</h2>
    {contents.map(Content =>
        <div>
        <h1 key="title!">{Content.title}</h1>
        <p  key="description!"> {Content.description}</p>
        <p  key="imageURL!"> {Content.imageURL}</p>
        <p  key="address!"> {Content.address}</p>
</div>
    )}
    </div>
    )
}
 */
