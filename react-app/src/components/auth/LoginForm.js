import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [demoEmail, setDemoEmail] = useState('demo@aa.io');
  const [demoPassword, setDemoPassword] = useState('password');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const onDemoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(demoEmail, demoPassword));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateDemoEmail = (e) => {
    setDemoEmail(e.target.value);
  };

  const updateDemoPassword = (e) => {
    setDemoPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="outterDiv">
    <div className="phone-image"></div>
    <div className="wrapper">
    <div className="login-form">
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="instagram-title">Pseudogram</div>
      <div className="login-field">
        {/* <label htmlFor='email'>Email</label> */}
        <input className="login-form-inputs"
          name='email'
          type='text'
          placeholder='Email'
          autocomplete="off"
          value={email}
          onChange={updateEmail}
        />
      </div>
        <div className="login-field">
        {/* <label htmlFor='password'>Password</label> */}
          <input className="login-form-inputs"
          name='password'
          type='password'
          placeholder='Password'
          autocomplete="off"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div>
        <button className="login-button" type='submit'>Log In</button>
      </div>

      <div className="demo-or">
        <hr className="hr-text" data-content='OR'></hr>
      </div>
    </form>
      <div>
        <form onSubmit={onDemoLogin}>
          <input 
            type="hidden"
            value={demoEmail}
            onChange={updateDemoEmail}
          />
          <input
          type="hidden"
          value={demoPassword}
          onChange={updateDemoPassword}
          />
        <button className="demo-button" type='submit'>Demo</button>
        </form>
      </div>
    </div>
      <div className="login-form__signup">Don't have an account? <Link to="/sign-up" className="signup-link">Sign up</Link></div>
      </div>
    </div>
  );
};

export default LoginForm;
