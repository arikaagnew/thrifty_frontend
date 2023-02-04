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
    password: ""
  }

  const [state, setState] = useState(kDefaultFormState)
  
  function handleUsernameChange (event) {
    setState({ username: event.target.value });
  }

  function handlePasswordChange (event) {
    setState({ password: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state.username);
    console.log(state.password);
  }

  function apiCall (){
    axios.post(`${kBaseUrl}/login/`,{'username': state.username, 'password': state.password})
      .then((response) => {
        console.log('The data we get back from the HTTP response:', response.data);
      })
      .catch((error) => {
        console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
        console.log('The data from response with an error:', error.response.data);
      });
    }

  // function apiCall (){
  //   fetch(`${kBaseUrl}/login/`)
  //     .then((response) => {
  //       console.log('The data we get back from the HTTP response:', response.data);
  //     })
  //     .catch((error) => {
  //       console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
  //       console.log('The data from response with an error:', error.response.data);
  //     });
  //   }

  // function apiCall (){
  //   axios({
  //     method: "POST",
  //     url: "http://127.0.0.1:8000/login/",
  //     data:{
  //       username: state.username,
  //       password: state.password,
  //     }
  //   });
// }

// function apiCall (){
//   try { const res = await axios.get("http://127.0.0.1:8000/login/", { data: { product: this.product } }) } 
//   catch (error) { console.log(error) }
// }


  return (
    // <div>
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Username</Form.Label>
    //       <Form.Control type="username" placeholder="Username" onChange={handleUsernameChange} />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
    //     </Form.Group>
    //     <Button variant="primary" type="submit" onClick={apiCall}>
    //       Log in
    //     </Button>
    //   </Form>
    //   <p>{ state.username } {state.password}</p>
    // </div>
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
                            <input type="text" class="form-control" placeholder="Username" onChange={handleUsernameChange}></input>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                            <input type="password" class="form-control" placeholder="Password" onChange={handlePasswordChange}></input>
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