import React from 'react';
import DevTools from "mobx-react-devtools";
import Counter, { AppState } from './Counter'
import logo from './logo.svg';
import './App.css';

const state = new AppState()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Counter appState={state} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DevTools />
    </div>
  );
}

export default App;
