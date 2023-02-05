import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect } from 'react';
import {useState} from 'react';
import { Component }  from 'react';
import axios from 'axios';

function LoginForm() {

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
      })
      .catch((error) => {
        console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
        console.log('The data from response with an error:', error.response.data);
      });
    }


  return (
    <div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
                <div class="form-container">
                    <div class="form-icon"><i class="fa fa-user"></i></div>
                    <h3 class="title">Login in</h3>
                    <form class="form-horizontal clearfix" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" placeholder="Username" onChange={handleInputChange} value= {state.username} name="username"></input>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                            <input type="password" class="form-control" placeholder="Password" onChange={handleInputChange} value= {state.password} name="password"></input>
                        </div>
                        <button type="button" class="btn btn-default" onClick={apiCall}><i class="fa fa-arrow-right"></i>Login</button>
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