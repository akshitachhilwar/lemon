import logo from './logo.svg';
import React from "react";
import './App.css';

function App() {
  return (
    <React.Fragment className="App">
    <header>
      <h1> Welcome</h1>

    </header>

    <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        <footer>
        <p>Contact</p>
        <p>Links To Social Media</p>
      </footer>



    </React.Fragment>

  );
}

export default App;
