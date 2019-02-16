import React from 'react';

const Header = () => {
  return(
    <header className='header'>
      <h1 className='header-title'>Portfolio</h1>
      <nav className='header-nav'>
        <a className='header-nav-item' href='#about'>About</a>
        <a className='header-nav-item' href='#works'>Works</a>
      </nav>
    </header>
  );
};

export default Header;