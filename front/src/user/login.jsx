import React, { useState } from 'react'
import '../App.css'

import axios from 'axios'
//import Cookies from 'universal-cookie'

//name of backend
const api = "http://localhost:4000/users"

function Login(){

    const [input, setInput] = useState({
        email: '',
        password: ''
    })


    function handleChange(event){        
        const {name, value} = event.target

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        //console.log(input)

        const newUser = {
            email: input.email,
            password: input.password
        }

        axios.get(api, newUser)
        console.log(`user ${newUser.email} was found`)
        window.location.href="../dashboard"
    }

    return(
        <div className="container">
            <h1>Login</h1>
            <form >
                <div className="form-group">
                    <input name="email" 
                    autoComplete="off" 
                    placeholder="email" 
                    type="email" 
                    value={input.email}
                    onChange={handleChange}
                    className="form-control" />
                </div>
                <div className="form-group">
                    <input name="password" 
                    autoComplete="off" 
                    placeholder="password" 
                    type="password" 
                    value={input.password}
                    onChange={handleChange}
                    className="form-control" />
                </div>

                <button onClick={handleClick} className="btn btn-info shadow-lg btn-lg">Login</button>
            </form>

        </div>
    )
}

export default Login;