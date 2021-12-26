import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
export const Login = () => {
    const history = useHistory()
    const [loginInfo, setloginInfo] = useState({email: '', password: ''})

   const onChange = (e)=>{
    setloginInfo({...loginInfo, [e.target.name]: e.target.value})
   }

    const onSubmit =async (e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/userlogin`, {
            method: 'POST', 
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZWJlM2M4ODUyY2VkMjM1YTQxY2E2In0sImlhdCI6MTYzOTg5MDQ5Mn0.ZdaMHNUzCCyRwTH7gFJnq-KsOwj6jcN2lgA9MlAmVAc'
            },
            body: JSON.stringify(loginInfo) 
        })
      
        const json = await response.json()
        console.log(json);
        if (json.success){
            // save it in local storage and redirect to home
            localStorage.setItem('token',json.authToken)
            history.push('/home')
        }
        else{
            alert(json.error)
        }
    }
   
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={onChange} placeholder='example@gmail.com' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange}  name='password' id="password" />
                </div>
                <button type="submit" className="btn btn-primary"  >Submit</button>
            </form>
        </div>
    )
}
