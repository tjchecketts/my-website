import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import Tiles from './Tiles';

class Projects extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          My Projects
        </Header>
        <Header as='h2' textAlign='center'>
          GitHub Projects
        </Header>
        <Card.Group stackable style={{padding: '15px'}}>
          <Tiles
            cardURL='https://github.com/tjchecketts'
            cardHeader='GitHub'
            cardDescription='My GitHub account'
          />
          <Tiles
            cardURL='http://rockps.surge.sh/'
            cardHeader='Rock, Paper, Scissors'
            cardDescription='Built with jQuery'
          />
          <Tiles
            cardURL='http://tanooki-mario.netlify.com/'
            cardHeader='Tanooki Mario (Flappy Bird)'
            cardDescription='Built with vanilla JavaScript using canvas'
          />
          <Tiles
            cardURL='http://square.surge.sh/'
            cardHeader='Tic Tac Toe'
            cardDescription='Built with React'
          />
          <Tiles
            cardURL='http://brick-breaker.netlify.com/'
            cardHeader='Brick Breaker'
            cardDescription='Built with vanilla JavaScript using canvas'
          />
        </Card.Group>
      </div>
    )
  }
}

export default Projects;