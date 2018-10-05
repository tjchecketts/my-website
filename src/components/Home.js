import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>
          TJ Checketts
        </Header>
        <Header as='h2' textAlign='center'>
          Software Developer
        </Header>
      </Segment>
    )
  }
}

export default Home;
