import React, { Component } from 'react';
import { Image, Segment } from 'semantic-ui-react';
import ComingSoon from '../images/ComingSoon.gif';

class Creative extends Component {
  render() {
    return (
      <Segment>
        <Image 
          src={ComingSoon} 
          centered 
          size='big' 
        />
      </Segment>
    )
  }
}

export default Creative;