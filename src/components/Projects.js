import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Projects extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          My Projects
        </Header>
        <Header as='h2' textAlign='center'>
          Will Get Projects Here
        </Header>
        <Header as='h3' textAlign='center'>
          <a 
            href="https://github.com/tjchecketts"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br />
          <a 
            href="http://rockps.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rock, Paper, Scissors
          </a>
          <br />
          <a 
            href="http://tanooki-mario.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanooki Mario (Flappy Bird)
          </a>
          <br />
          <a 
            href="http://square.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tic Tac Toe
          </a>
          <br />
          <a 
            href="http://brick-breaker.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brick Breaker
          </a>
        </Header>
      </div>
    )
  }
}

export default Projects;