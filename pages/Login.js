import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <div className="bg-img">
    
            <div className="content">
            hii
                <header>Login form</header>
                <form action="#">
                <div className="field">
                    <span></span>
                    <input className="email" type="email" placeholder="E-mail or Phone"/>
                </div>
                <div className="field">
                    <span></span>
                    <input type="password" placeholder="E-mail or Phone"/>
                </div>
                <div className="field">
                    <span></span>
                    <input type="submit" placeholder="E-mail or Phone" value="LOGIN"/>
                </div>
                    
                </form>
            </div>

        </div>
    )
}

export default Login
