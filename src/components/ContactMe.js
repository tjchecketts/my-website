import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

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
        <Header as='h3' textAlign='center'>
          <a 
            href="https://www.linkedin.com/in/tylerjchecketts/"
            target="_blank"
            rel="noopener noreferrer"
            title='LinkedIn'
          >
            LinkedIn
          </a>
          <br />
          <a 
            href="mailto:tylerchecketts@gmail.com"
            rel="noopener noreferrer"
            title='Email Me'
          >
            Email
          </a>
        </Header>
      </div>
    )
  }
}

export default ContactMe;