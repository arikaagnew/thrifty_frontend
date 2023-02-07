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

    // return (
    //     <div>
    //         <h2>Hello from the homepage!</h2>
    //         {state.map((post) => {
    //             return (
    //                 <div className='wrapper'>
    //                     <p>{post.user.username}</p>
    //                     <p> {post.title}</p>
    //                     <p>{post.description}</p>
    //                 </div>
                    
    //             );
    //         })}
    //     </div>
    // );
    return(
        <div>
             {state.map((post) => {
    return(

<div className="container mx-auto mt-4">
  <div className="row">
       <div className="col-md-4">
            <div className="card" >
  {/* <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="..."> */}
                <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.date_created}</h6>
                <p className="card-text">{post.description}</p>
                <a className="btn  mr-2"><i className="fas fa-link"></i>Unclaimed</a>
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