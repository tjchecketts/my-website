import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item 
              name='home' 
            />
          </Link>
          <Link to='/projects'>
            <Menu.Item 
              name='projects' 
            />
          </Link>
          <Link to='/contactme'>
            <Menu.Item 
              name='contact me' 
            />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/creative'>
              <Menu.Item 
                name='creative'
                
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navbar);
