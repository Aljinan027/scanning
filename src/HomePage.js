import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const HomePage = () => {
  return (
    <div>
        <div className="App">
            <header className="App-header">
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li><Link to="/scanning">Go to Scanning Page</Link></li>
                    <li><Link to="/report">Go to Report Page</Link></li>
                </ul>
            </nav>
                <img src={logo} className="App-logo" alt="logo" />

                <p>Testing</p>
                <a
                className="App-link"
                href="Scanning.js"
                target="_blank"
                rel="noopener noreferrer"
                >
                Scanning
                </a>
            </header>
        </div>

    </div>
  );
};

export default HomePage;


