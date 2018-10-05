import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

class ContactMe extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          Contact Me
        </Header>
        <Header as='h2' textAlign='center'>
          Reach Me Here
        </Header>
        <Container textAlign='center'>
          <a 
            href="https://github.com/tjchecketts"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a 
            href="mailto:tylerchecketts@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </Container>
      </div>
    )
  }
}

export default ContactMe;