import './Pages.css'
import React, { useEffect } from 'react';
import {useState} from 'react';
import { Component }  from 'react';
import axios from 'axios';

function HomePage() {
    const [state, setState] = useState([]);

    const kBaseUrl = process.env.REACT_APP_BACKEND_URL;


    useEffect(() => {
        axios.get(`${kBaseUrl}/posts/`)
          .then((response) => {
            console.log('The data we get back from the HTTP response:', response.data);
            setState(response.data);
            console.log('State', state)
          })
          .catch((error) => {
            console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
            console.log('The data from response with an error:', error.response.data);
          });
      }, []);

    return (
        <div>
            <h2>Hello from the homepage!</h2>
            {state.map((post) => {
                return (
                    <div className='wrapper'>
                        <p>{post.user.username}</p>
                        <p> {post.title}</p>
                        <p>{post.description}</p>
                    </div>
                );
            })}
        </div>
    );

}
export default HomePage;