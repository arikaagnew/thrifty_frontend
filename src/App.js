import logo from './logo.svg';
import './App.css';
import LoginForm from "./Components/LoginForm";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <NavBar/>
      <LoginForm/>
    </div>
  );
}

export default App;
