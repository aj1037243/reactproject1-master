import React, {useState} from 'react';
import axios from "axios";

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
        //post content to express server working as of 11/28/2022
        axios.post('http://localhost:3001/postContent', newContent)
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }   
    


//Create the html to insert userContent:

    return ( 
    <div className='container'>
        <h1>Create Tourist Location</h1>
    <form>
        <div className="">
            <input onChange={handleChange} className="" name="title" value={input.title} autoComplete="off" placeholder="Tourist Title"></input>    
        </div>
        <div className="">
            <textarea onChange={handleChange} className="" name="description" value={input.description} autoComplete="off" placeholder="Tourist description"></textarea>    
        </div>
        <div className="">
            <input onChange={handleChange} className="" name="pictureURL" value={input.pictureURL} autoComplete="off" placeholder="PictureURL"></input>    
        </div>
        <div className="">
            <input onChange={handleChange} className="" name="address" value={input.address} autoComplete="off" placeholder="Address"></input>    
        </div>
        <button onClick={handleClick} className="">Add Location</button>
    </form>
   </div>
    )
}

export default UserInputContent;