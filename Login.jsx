import React, { useState } from "react";

export const Login = (props) => {
    const [firstname, setfirstname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <box>
        <div className="auth-form-container">
            <h2>SIGN UP</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname"><b>FIRST NAME</b></label>
                <input value={firstname} onChange={(e) => setfirstname(e.target.value)}type="firstname"  id="firstname" name="firstname" />
                <label htmlFor="lname"><b>LAST NAME</b></label>0
                <input value={lname} onChange={(e) => setlname(e.target.value)}type="lname"  id="lname" name="lname" />
                <label htmlFor="email"><b>EMAIL-ID</b></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" />
                <label htmlFor="password"><b>PASSWORD</b></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password"  id="password" name="password" />
                <button type="submit"><b>SIGN UP</b></button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't Have An Account? Sign Up Here!</button>
            
        </div>
        </box>
    )
}