import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

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
        <Container textAlign='center'>
          <a 
            href="https://www.linkedin.com/in/tylerjchecketts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Container>
      </div>
    )
  }
}

export default Projects;