import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PostForm() {
    return (
        // <Form>
        // <Form.Group className="mb-3" controlId="formBasicTitle">
        //     <Form.Label>Title</Form.Label>
        //     <Form.Control type="title" />
        // </Form.Group>

        // <Form.Group controlId="formFile" className="mb-3">
        //     <Form.Label>Add Image</Form.Label>
        //     <Form.Control type="file" />
        // </Form.Group>

        // <Form.Group className="mb-3" controlId="formBasicDescription">
        //     <Form.Label>Description</Form.Label>
        //     <Form.Control as="textarea" rows={3} />
        // </Form.Group>
        // <Button variant="primary" type="submit">
        //     Post
        // </Button>
        // </Form>

<div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
                <div className="form-container">
                    <div className="form-icon"><i class="fa fa-user"></i></div> 
                    <span className="title">Post</span>
                    <form className="form-horizontal clearfix">
                        <p className="title">Title:</p>
                        <div className="form-group">
                            <span className="input-icon"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control"></input>
                        </div>
                        <p className="description">Description:</p>
                        <div className="form-group">
                            <span className="input-icon"><i class="fa fa-lock"></i></span>
                            <input type="password" class="form-control"></input>
                        </div>
                        <button type="button" class="btn btn-default"><i class="fa fa-arrow-right"></i>Post</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default PostForm;