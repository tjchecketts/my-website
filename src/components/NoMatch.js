import React, { Component } from 'react';
import Image404 from '../images/404-interstate-reduced.png';
import { Image } from 'semantic-ui-react';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Image 
          src={Image404} 
          centered 
          size='big' 
        />
      </div>
    );
  }
}

export default NoMatch;
