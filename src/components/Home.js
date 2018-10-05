import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          TJ Checketts
        </Header>
        <Header as='h2' textAlign='center'>
          Software Developer
        </Header>
      </div>
    )
  }
}

export default Home;
