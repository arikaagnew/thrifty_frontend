import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';

function PostForm() {

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

  const current = new Date();
  const date = current.getDate()

  const kDefaultFormState = {
    title: "",
    description: "",
    date_created: date,
    is_claimed: false,
    user: ""
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
    console.log(state.title);
    console.log(state.description);
  }


  function apiCall (){
    axios.post(`${kBaseUrl}users/<int:id>/posts/`,
    {title: state.title, 
    description: state.description,
    date_created: state.date_created,
    is_claimed: state.is_claimed,
    user: state.user,
    })
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
                    <h3 class="title">Post</h3>
                    <form class="form-horizontal clearfix" onSubmit={handleSubmit}>
                        <p class="description">Title:</p>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" onChange={handleInputChange} value={state.title} name="title"></input>
                        </div>
                        <p class="description">Description:</p>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                            <input type="text" class="form-control" onChange={handleInputChange} value={state.description} name="description"></input>
                        </div>
                        <button type="button" class="btn btn-default" onClick={apiCall}><i class="fa fa-arrow-right"></i>Post</button>
                    </form>
                    <p>{ state.title } {state.description}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
  
  export default PostForm;