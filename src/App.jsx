import React from 'react';
import "./App.css";

export function App() {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false"><a href="#">Apps</a></button>
          <ul className="sub-menu" aria-label="Apps">
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default App;
