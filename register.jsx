import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <box>
            <h2>LOGIN</h2>
        <form className="register-form" onSubmit={handleSubmit}>
           
            <label htmlFor="email">EMAIL</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" />
            <label htmlFor="password">PASSWORD</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button  type="submit"    onClick={() => props.onFormSwitch('login')} >LOGIN</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already Have An Account? Login Here!</button>
        </box>
    </div>
    )
}