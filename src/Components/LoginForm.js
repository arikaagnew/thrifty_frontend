import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect } from 'react';
import {useState} from 'react';
import { Component }  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const getItemFromLocalStorage = (keyName) => {
    try {
      const value = window.localStorage.getItem(keyName);
  
      if (value) {
        return JSON.parse(value);
      }
  
      return null;
    } catch (err) {
      console.log(err);
    }
  };

  const items = getItemFromLocalStorage('items')

  const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

  const kDefaultFormState = {
    username: "",
    password: "",
  }

  const [state, setState] = useState(kDefaultFormState)


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
};
  

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state.username);
    console.log(state.password);
  }

  function apiCall (){
    axios.post(`${kBaseUrl}/login/`,{username: state.username, password: state.password})
      .then((response) => {
        console.log('The data we get back from the HTTP response:', response.data);
        window.localStorage.setItem('items', JSON.stringify({ ...response.data }));
      })
      .catch((error) => {
        console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
        console.log('The data from response with an error:', error.response.data);
      });
    }

  const navigate = useNavigate()

  const handleClick = () => {
    apiCall();
    if (items) {
    navigate('/home')
    };
  }

  return (
    <div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
                <div className="form-container">
                    <div className="form-icon"><i class="fa fa-user"></i></div>
                    <h3 className="title">Login in</h3>
                    <form className="form-horizontal clearfix" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <span className="input-icon"><i class="fa fa-user"></i></span>
                            <input type="text" className="form-control" placeholder="Username" onChange={handleInputChange} value= {state.username} name="username"></input>
                        </div>
                        <div className="form-group">
                            <span className="input-icon"><i class="fa fa-lock"></i></span>
                            <input type="password" className="form-control" placeholder="Password" onChange={handleInputChange} value= {state.password} name="password"></input>
                        </div>
                        <button type="button" className="btn btn-default" onClick={handleClick}><i className="fa fa-arrow-right"></i>Login</button>
                    </form>
                    <p>{ state.username } {state.password}</p>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default LoginForm;