import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import ComingSoon from '../images/ComingSoon-reduced.gif';

class Creative extends Component {
  render() {
    return (
      <div>
        <Image 
          src={ComingSoon} 
          centered 
          size='big' 
        />
      </div>
    )
  }
}

export default Creative;