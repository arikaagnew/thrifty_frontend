import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";


function NavBar() {


const setItemInLocalStorage = (keyName, value) => {
  window.localStorage.setItem(keyName, JSON.stringify(value));
};

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

const navigate = useNavigate();

const handleClick = () => {
  setItemInLocalStorage('items',null)
  navigate('/login');
}

const items = getItemFromLocalStorage('items')


  return (
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='brand' >Thrifty</Navbar.Brand>
          <Nav className="meauto">
            <Link className="link" to="/home">Home</Link>
            {!items && <Link  className="link" to="/login">Login</Link>}
            {items && <Link  className="link" to="/post">Post</Link>}
            {items && <Link  className="link" to="/profile">Profile</Link>}
          </Nav>
          {items && <Button onClick={handleClick}>Logout</Button>}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;