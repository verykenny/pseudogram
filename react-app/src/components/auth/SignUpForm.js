import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div>
    <div className="signup-form">
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
        <div className="instagram-title">Pseudogram</div>
        <div className="signup-text">Sign up to see photos and videos from your friends.</div>
      <div>
        <div className="login-field">
          <input className="login-form-inputs"
          type='text'
          placeholder="Username"
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
          </div>
      </div>
      <div>
        <div className="login-field">
        <input className="login-form-inputs"
          type='text'
          name='email'
          placeholder="Email"
          onChange={updateEmail}
          value={email}
        ></input>
          </div>
      </div>
      <div>
        <div className="login-field">
          <input className="login-form-inputs"
          type='password'
          name='password'
          placeholder='Enter Desired Password'
          onChange={updatePassword}
          value={password}
        ></input>
          </div>
      </div>
      <div>
        <div className="login-field">
          <input className="login-form-inputs"
          type='password'
          placeholder="Confirm Password"
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
          </div>
      </div>
      <button className="signup-button" type='submit'>Sign Up</button>
    </form>
    </div>
      <div className="login-form__signup">Have an account? <Link to="/login" className="signup-link">Log in</Link></div>
    </div>
  );
};

export default SignUpForm;
