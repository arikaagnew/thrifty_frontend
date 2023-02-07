import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';

function PostForm() {

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

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

  const current = new Date();
  const date = current.getDate()

  const kDefaultFormState = {
    title: "",
    description: "",
    date_created: date,
    is_claimed: false,
    user: items.id
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
    axios.post(`${kBaseUrl}/users/${state.user}/posts/`,
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
    <div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
                <div className="form-container">
                    <div className="form-icon"><i className="fa fa-user"></i></div>
                    <h3 className="title">Post</h3>
                    <form className="form-horizontal clearfix" onSubmit={handleSubmit}>
                        <p className="description">Title:</p>
                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" onChange={handleInputChange} value={state.title} name="title"></input>
                        </div>
                        <p className="description">Description:</p>
                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                            <input type="text" className="form-control" onChange={handleInputChange} value={state.description} name="description"></input>
                        </div>
                        <button type="button" className="btn btn-default" onClick={apiCall}><i className="fa fa-arrow-right"></i>Post</button>
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