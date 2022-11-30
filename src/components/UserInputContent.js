import React from 'react';
import {useState} from 'react';
import axios from "axios";
import '../css/UserInputContent.css'

function UserInputContent() {
    const[input, setInput] = useState({
        title: '',
        description: '',
        pictureURL: '',
        address: '',
    })

    function handleChange(event) {
        const{name, value} = event.target
    
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();

        const newContent = {
            title: input.title,
            description: input.description,
            pictureURL: input.pictureURL,
            address: input.address
        }
        console.log(newContent);
        //post content to express server working as of 11/29/2022 posts content to test.content        
        axios.post('http://localhost:3001/postContent', newContent)
        //then.((response) => console.log(response))
        .catch((error) => console.log(error))
    }   
    


//Create the html to insert userContent:
    return ( 
    <div className='container'>
        <h1>Create Tourist Location</h1>
    <form>
        <div className="">
            <input type="text" onChange={handleChange} name="title" value={input.title} autoComplete="off" placeholder="Location's Name"></input>    
        </div>
        <div className="">
            <input type="text" onChange={handleChange} name="description" value={input.description} autoComplete="off" placeholder="Location's description"></input>    
        </div>
        <div className="">
            <input type="text" onChange={handleChange} name="pictureURL" value={input.pictureURL} autoComplete="off" placeholder="Location's PictureURL"></input>    
        </div>
        <div className="">
            <input type="text" onChange={handleChange} name="address" value={input.address} autoComplete="off" placeholder="Location's Address"></input>    
        </div>
        <button onClick={handleClick}>Add Location</button>
    </form>
   </div>
    )
}

export default UserInputContent;