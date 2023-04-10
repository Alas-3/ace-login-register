import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        const registeredUsername = localStorage.getItem('username');
        const registeredPassword = localStorage.getItem('password');

        const username = document.getElementById('username');
        const password = document.getElementById('password');

        if(username.value === registeredUsername && password.value === registeredPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        }
        else {
            alert('Username or Password is incorrect.')
        }
    }


  return (
    <div className="login-page">
      <div className="login-container" onSubmit={e => loginHandler(e)}>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input type="text" id="username" name="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;