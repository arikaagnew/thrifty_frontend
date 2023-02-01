import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PostForm() {
    return (
    <div class="container mt-3">
    <form action="/action_page.php">
        <div class="mb-3 mt-3">
            <label for="title">Title</label>
            <input>type="title" class="form-control" id="title" name="title"</input> 
        </div>
        <div class="mb-3">
            <label for="image">Add Image</label>
            <input>type="file" id="myFile" name="filename"</input>
        </div>
        <div class="mb-3">
            <label for="pwd">Description</label>
            <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
        </div>
            <button type="submit" class="btn btn-primary">Post</button>
    </form>
    </div>
    );
  }
  
  export default PostForm;