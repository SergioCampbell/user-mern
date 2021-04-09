import React, { useState }from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'

import axios from 'axios'

//name of backend
const api = "http://localhost:4000"

function SignUp(){

    //config user
    const [user, setUser] = useState(null);

    //watching changes in inputs
    const handleInputChange = (event) => {
        setUser({
            ...user,[event.target.name] : event.target.value
        })
    }

    //validating
    const {handleSubmit} = useForm();

    const sentData = (e => {
       //e.preventDefault()

        const registered = {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        }

        console.log('sending data ...')

        axios.post(api + '/signup', registered)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
        
        setUser({
            _id: '',
            fullName: '',
            age: '',
            email: '',
            password: '',
            confirmPassword: ''
        }) 

        console.log('successful!')
        window.location.href="./login"
    })


    return(
        <div className="container bg-dark form mt-5 mb-5 shadow-lg">
        <h1> SignUp </h1>
        <br />
            <div className="form-div">
            <form onSubmit={handleSubmit(sentData)}>

            <div className="mb-3">                
                <input type="text" 
                placeholder="Full name"
                required
                onChange={handleInputChange}
                name="fullName"
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <input type="email"
                placeholder="email"
                onChange={handleInputChange}
                name="email"
                required
                className="form-control" />
            </div>

            <div className="mb-3">                
                <input type="password" 
                placeholder="password"
                onChange={handleInputChange}
                name="password"
                className="form-control" 
                required/>
                
            </div>

            <div className="mb-3">                
                <input type="password" 
                placeholder="confirm Password"
                onChange={handleInputChange}
                name="confirmPassword"
                className="form-control" 
                required />
                
            </div>
            
            <button type="submit" 
            className="btn btn-primary btn-lg shadow">Connect</button>
        </form>
            </div>
        </div>
    )
}

export default SignUp;