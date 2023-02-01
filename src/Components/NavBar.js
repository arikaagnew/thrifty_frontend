import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Thrifty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://127.0.0.1:3000/home">Home</Nav.Link>
            <Nav.Link href="http://127.0.0.1:3000/login">Login</Nav.Link>
            <Nav.Link href="http://127.0.0.1:3000/post">Post</Nav.Link>
            <Nav.Link href="http://127.0.0.1:3000/profile">Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;