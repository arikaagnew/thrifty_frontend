import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [day, setDay] = useState(date)
  const [claimed, setClaimed] = useState(false)
  const [user, setUser] = useState(items.id)


const submit = async event => {
  event.preventDefault()

  const formData = new FormData()
  formData.append("image", file)
  formData.append("description", description)
  formData.append("title", title)
  formData.append("date_created", day)
  formData.append("is_claimed", claimed)
  formData.append("user", user)

  const result = axios.post(`${kBaseUrl}/users/${items.id}/posts/`,
      formData,{headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    }})
        .then((response) => {
          console.log('The data we get back from the HTTP response:', response.data);
        })
        .catch((error) => {
          console.log('Anything that isn\'t status code 2XX is an error:', error.response.status);
          console.log('The data from response with an error:', error.response.data);
        });
  // const result = await axios.post('{kBaseUrl}/users/{items.id}/posts/', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  // console.log(result.data)
}

  // const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate('/home');
  // }


    return (
    <div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
                <div className="form-container">
                    <div className="form-icon"><i className="fa fa-user"></i></div>
                    <h3 className="title">Post</h3>
                    <form className="form-horizontal clearfix" onSubmit={submit}>
                        <p className="description">Title:</p>
                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} ></input>
                        </div>
                        <p className="description">Image:</p>
                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-user"></i></span>
                            <p>
                            <input type="file" className="form-control"onChange={e => setFile(e.target.files[0])}  accept="image/png, image/jpeg"></input>
                            </p>
                        </div>
                        <p className="description">Description:</p>
                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                            <input type="text" className="form-control" onChange = {e => setDescription(e.target.value)} ></input>
                        </div>
                        <button type="submit" className="btn btn-default"><i className="fa fa-arrow-right"></i>Post</button>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
  
  export default PostForm;