import React from 'react';
import { Divider, Grid, Box } from '@material-ui/core';
import { Mail, LinkedIn, GitHub } from '@material-ui/icons';
import './App.css';
import avatar from './avatar.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hi! I'm Mykola
        </h1>
        <p className="Quote">"A picture may be worth a thousand words, a formula is worth a thousand pictures"</p>
        <p className="Author"> - Edsger W. Dijkstra</p>
      </header>
      <Box className="Content">
        <Grid container justify="space-evenly" spacing={8}>
          <Grid item xs={8} lg={4} className="About-item">
            <img src={avatar} alt="Avatar" className="Avatar" />
          </Grid>
          <Grid item xs={12} lg={8} className="About-item">
            <h1>
              About me
            </h1>
            <Divider />
            <p>
              I currently study computer science at the University of Bristol.
            </p>
            <a href="https://github.com/MechyKola/Resume">
              You can download the latest version of my resume on my Github here
            </a>
            <br />
            <br />
            <a href="google.com">
              <Mail fontSize="large" className="Icon" />
            </a>
            <a href="github.com">
              <LinkedIn fontSize="large" className="Icon" />
            </a>
            <a href="linkedin.com">
              <GitHub fontSize="large" className="Icon" />
            </a>
          </Grid>
          <Grid item xs={12} lg={6} className="Content-item">
            <h2>
              Employment
            </h2>
            <p>
              > point 1
            </p>
            <p>
              > point 2
            </p>
          </Grid>
          <Grid item xs={12} lg={6} className="Content-item">
            <h2>
              Extra Curricular
            </h2>
            <p>
              > something
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
