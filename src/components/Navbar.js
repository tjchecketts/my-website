import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu secondary size='huge'>
          <Link to='/'>
            <Menu.Item name='home' title='Home' />
          </Link>
          <Link to='/projects'>
            <Menu.Item name='projects' title='Projects' />
          </Link>
          <Link to='/contactme'>
            <Menu.Item name='contact me' title='Contact me' />
          </Link>
          <Menu.Menu position='right'>
            <Link to='/creative'>
              <Menu.Item name='creative' title='Creative' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navbar);
