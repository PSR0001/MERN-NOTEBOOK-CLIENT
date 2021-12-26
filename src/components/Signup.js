import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

export const Signup = () => {
    const history = useHistory()
    const [singnUp, setsingnUp] = useState({name:'', email: '', password: '', cpassword:''})

   const onChange = (e)=>{
    setsingnUp({...singnUp, [e.target.name]: e.target.value})
   }

    const onSubmit =async (e)=>{
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
        if (json.success){
            // save it in local storage and redirect to home
            localStorage.setItem('token',json.authToken)
            history.push('/login')
        }
        else{
            alert(json.error)
        }
    }
    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name"  className="form-label"  >Name</label>
                    <input type="text" name='name' onChange={onChange} minLength={4} className="form-control" id="name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder='example@gmail.com' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" onChange={onChange} minLength={4}  className="form-control" id="password" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" name='cpassword' onChange={onChange} className="form-control" id="cpassword" minLength={4} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
