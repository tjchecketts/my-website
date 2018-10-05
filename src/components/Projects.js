import React, { Component } from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';

class Projects extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>
          My Projects
        </Header>
        <Header as='h2' textAlign='center'>
          Will Get Projects Here
        </Header>
        <Container>
          <a 
            href="https://www.linkedin.com/in/tylerjchecketts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Container>
      </Segment>
    )
  }
}

export default Projects;