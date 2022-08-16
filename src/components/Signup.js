import React, { useState } from 'react'
import { useHistory,Link } from 'react-router-dom'
import { FaFacebookF,FaLinkedinIn,FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export const Signup = () => {
    const history = useHistory()
    const [singnUp, setsingnUp] = useState({ name: '', email: '', password: '', cpassword: '' })

    const onChange = (e) => {
        setsingnUp({ ...singnUp, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(singnUp)
        })

        const json = await response.json()
        console.log(json);
        if (json.success) {
            // save it in local storage and redirect to home
            localStorage.setItem('token', json.authToken)
            history.push('/login')
        }
        else {
            alert(json.error)
        }
    }
    return (
        <div className='container'>
            <div className="form-signin text-center card mt-5 shadow">
                <form onSubmit={onSubmit}>

                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                    <div className="form-floating">
                        <input type="text" name='name' onChange={onChange} minLength={4} className="form-control shadow-none" id="name" required />
                        <label htmlFor="floatingInput">Your Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" name='email' onChange={onChange} className="form-control shadow-none" id="email" aria-describedby="emailHelp" placeholder='example@gmail.com' required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>


                    <div className="form-floating">
                        <input type="password" name="password" onChange={onChange} minLength={4} className="form-control shadow-none" id="password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" name='cpassword' onChange={onChange} className="form-control shadow-none" id="cpassword" minLength={4} required />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>


                    <button  className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2020–2022</p>
                </form>
                <div className="text-center">
                    <p>Already a member? <Link to={'/login'} >Log in</Link></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaFacebookF />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FcGoogle />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaLinkedinIn />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    )
}
