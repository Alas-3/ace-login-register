import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';



const Signup = () => {

const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();

        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const passwordConfirmation = document.getElementById('passwordConfirmation');

        if(password.value === passwordConfirmation.value) {
            localStorage.setItem('username', username.value);
            localStorage.setItem('password', password.value);

            navigate('/login');
        }
        else{
            alert('Passwords do not match, please try again.');
        }
    }

  return (
    <div className="signup-page">
      <div className="signup-container" onSubmit={e => registerHandler(e)}>
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input type="text" id="username" name="name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required/>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="passwordConfirmation" name="confirm-password" required/>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
