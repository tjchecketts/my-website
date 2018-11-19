import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import ProPic from '../images/pro-pic-reduced.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          TJ Checketts
        </Header>
        <Image 
          src={ProPic} 
          alt='TJ Checketts smiling in profile picture' 
          size='medium' 
          circular 
          centered 
        />
        <Header as='h2' textAlign='center'>
          Software Developer
        </Header>
      </div>
    )
  }
}

export default Home;
