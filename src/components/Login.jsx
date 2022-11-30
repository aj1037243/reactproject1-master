import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../css/Login.css';


const Login = props => {
    

    let history = useNavigate();

    return(


    


    <div className='loginbox'>
        <h2>Login</h2>
        <hr></hr>
        <form>
            <div className='username-box'>
                <label for="username"><b>Username</b></label>
                <br></br>
                <input type="text" placeholder="Enter Username" name="uname" required></input>
            </div>
            <div className='password-box'>
                <label for="password"><b>Password</b></label>
                <br></br>
                <input type="password" placeholder="Enter Password" name="psw" required></input>

            </div>

            <button type='submit'onClick= {() => {history.push("./")}}> Sign in</button>


            <div className='signup-container'>
                <p>First-time user? <a href='/signup'>Create an account.</a></p>
            </div>
        </form>
    </div>

     )

};

export default Login;