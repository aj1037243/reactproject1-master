import { useNavigate  } from 'react-router-dom'
import { useEffect  } from 'react'
import React from 'react'
import '../css/SignUp.css'
function Register() {
    const history = useNavigate()

    async function handleRegister(e) {
        e.preventDefault()


        const form = e.target
        const user = {
            email: form[0].value,
            password: form[1].value,
        }
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
        body: JSON.stringify(user)
        })
    }

    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/dashboard"): null)
    }, [])
    
    return (
            <div className='signup-box'>
                <h2>Sign Up</h2>
                <hr></hr>
                <form>
                    <div className='username-signup'>
                        <label for="username"><b>Choose your Username</b></label>
                        <br></br>
                        <input type="text" placeholder="Enter Username" name="usn-signup" required></input>
                    </div>
                    <div className='password-signup'>
                        <label for="password"><b>Choose your Password</b></label>
                        <br></br>
                        <input type="password" placeholder="Enter Password" name="psw-signup" required></input>
                    </div>
                    <div className='password-signup'>
                        <label for="password"><b>Verify your Password</b></label>
                        <br></br>
                        <input type="password" placeholder="Re-enter Password" name="psw-signup" required></input>
                    </div>
                    <button type="submit" name="btn-signup"><b>Sign Up!</b></button>

                </form>
            </div>
        );
    }

export default Register

