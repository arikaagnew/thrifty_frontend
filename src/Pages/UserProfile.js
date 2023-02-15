import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function UserProfile() {

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const [state, setState] = useState([]);

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


useEffect(() => {
    axios.get(`${kBaseUrl}/users/${items.id}/posts/`)
        .then((response) => {
        console.log('The data we get back from the HTTP response:', response.data);
        setState(response.data)
        })
        .catch((error) => {
        console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
        console.log('The data from response with an error:', error.response.data);
        });
    }, []);

    function apiCall() {
        const value = state[0].pk;
        axios.delete(`${kBaseUrl}/posts/${value}/`)
        .then((response) => {
        console.log('The data we get back from the HTTP response:', response.data);
        })
        .catch((error) => {
        console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
        console.log('The data from response with an error:', error.response.data);
        });
    }




    return (
        <div>
        <h1 className='profile-name'>Profile for {items.username}</h1>
        <div className='post-container'>
        {state.map((post) => {
                const isClaimedChange = post.is_claimed ? 'Claimed' : 'Unclaimed';
            return(

            <div className="container mx-auto mt-4">
            <div className="row">
            <div className="">
                <div className="card" >
                    <div className="card-body">
                    <h5 className="card-title">{post.fields.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.fields.date_created}</h6>
                    <img src={`${kBaseUrl}/media/${post.fields.image}`} alt="Clothing" height={200} width={200} accept="image/png, image/jpeg"></img>
                    <p className="card-text">{post.fields.description}</p>
                    <button className="btn  mr-2"><i className="fas fa-link"></i>{isClaimedChange}</button>
                    <button className="btn  mr-2" onClick={apiCall}><i className="fas fa-link"></i>Delete</button>
                    </div>
                </div>
            </div>  
            </div>
            </div>
            );
                })}   
            </div>
            </div>
                );
}

export default UserProfile;