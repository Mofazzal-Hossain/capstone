import axios from "axios";
import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        status: '',
    })

    const handleChange=(event)=>{
        setLoginData({
            ...loginData,
            [event.target.name]:event.target.value
        })
    }
    // console.log(loginData);


    const handleLogin=(event)=>{
        event.preventDefault()
        const authorData = new FormData();
        authorData.append('email', loginData.email)
        authorData.append('password', loginData.password)

        try{
            axios.post('http://127.0.0.1:8000/login/', authorData)
            .then((response)=>{
                console.log(response);
                if(response.data.bool===true){
                    localStorage.setItem('authorLoginStatus', true)
                    // localStorage.setItem('authorId', response.data.id)
                    window.location.href = '/'
                }
            })

        }catch(error){
            console.error(error)
        }
    }

    const authorLoginStatus = localStorage.getItem('authorLoginStatus')
    if (authorLoginStatus == 'true'){
        window.location.href='/'
    }

  return (
    <>
      <section className="contact-wrapper">
        <div className="container d-flex justify-content-center">
            <div className="row contact-main-wrap">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={loginData.email}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={loginData.password}
                />
              </div>
              <div className="d-flex justify-content-center mt-3"><button type="submit" onClick={handleLogin} className="btn">
                Submit
              </button></div>
              
            </form>
            </div>
        </div>
    </section>
    </>
  );
}
