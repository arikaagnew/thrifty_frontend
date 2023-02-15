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
          })
          .catch((error) => {
            console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
            console.log('The data from response with an error:', error.response.data);
          });
      }, []);


    return(
        <div className='post-container'>
             {state.map((post) => {
                const isClaimedChange = post.is_claimed ? 'Claimed' : 'Unclaimed';
    return(

<div className="container mx-auto mt-4">
  <div className="row">
       <div className="">
            <div className="card" >
                <div className="card-body">
                <h5 className="card-title">{post.username}</h5>
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.date_created}</h6>
                <img src={post.image} alt="Clothing" height={200} width={200}></img>
                <p className="card-text">{post.description}</p>
                <button className="btn  mr-2"><i className="fas fa-link"></i>{isClaimedChange}</button>
                </div>
            </div>
        </div>  
  </div>
</div>
    );
            })}   
    </div>
    );
}
export default HomePage;