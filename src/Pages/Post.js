import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PostForm() {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="title" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Image</Form.Label>
            <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Post
        </Button>
        </Form>
    );
}

export default PostForm;