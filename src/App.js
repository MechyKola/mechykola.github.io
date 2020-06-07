import React from 'react';
import { Divider, Grid, Box } from '@material-ui/core'
import './App.css';
import avatar from './avatar.jpg';

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
      <content>
        <Grid container justify="space-evenly" className="About-item">
          <Grid item xs={8} lg={4} className="About-item">
            <img src={avatar} alt="Avatar" className="Avatar" />
          </Grid>
          <Grid item xs={12} lg={8} className="About-item">
            <h1>
              About me
            </h1>
            <Divider />
            <p>
              I'm currently study computer science at the University of Bristol.
              Outside my studies I am the president of The CSS (Computer Science Society)
              of the University of Bristol, and take part in the Russian speaking society.
            </p>
          </Grid>
        </Grid>
        <Box s={12}>
          <p>
            Something about what I've done I guess
          </p>
        </Box>
      </content>
    </div>
  );
}

export default App;
