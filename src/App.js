import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Creative from './components/Creative';


class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item 
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='contact me'
            active={activeItem === 'contact me'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            position='right'
            name='creative'
            active={activeItem === 'creative'}
            onClick={this.handleItemClick}
          />
        </Menu>
        {(activeItem === 'home') ? <Home /> : ''}
        {(activeItem === 'projects') ? <Projects /> : ''}
        {(activeItem === 'contact me') ? <ContactMe /> : ''}
        {(activeItem === 'creative') ? <Creative /> : ''}
      </div>
    );
  }
}

export default App;
