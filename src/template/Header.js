import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1 className='header-title'>Portfolio</h1>
        <nav className='header-nav'>
          <a className='header-nav-item' href='#about'>About</a>
          <a className='header-nav-item' href='#works'>Works</a>
        </nav>
      </header>
    );
  }
}

export default Header;