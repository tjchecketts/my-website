import React, { Component } from 'react';
import Image404 from '../images/404-interstate-reduced.png';
import { Image, Segment } from 'semantic-ui-react';

class NoMatch extends Component {
  render() {
    return (
      <Segment>
        <Image 
          src={Image404} 
          centered 
          size='big' 
        />
      </Segment>
    );
  }
}

export default NoMatch;
