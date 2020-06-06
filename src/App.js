import React from 'react';
import { Divider } from '@material-ui/core'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hi! I'm Mykola
        </h1>
        <p className="Quote">"Code is kinda cool but I wouldn't do it as a job"</p>
        <p className="Author"> - me, before becoming a software engineer</p>
      </header>
      <h1>
        About me
      </h1>
      <Divider />
      <p>
        I'm currently a computer science student at the University of Bristol.
      </p>
    </div>
  );
}

export default App;
