import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>

        {/* header */}
        <header className='header'>
          <h1 className='header-title'>Portfolio</h1>
          <nav className='headerNav'>
            <a className='headerNav-item' href='#about'>About</a>
            <a className='headerNav-item' href='#works'>Works</a>
          </nav>
        </header>

        {/* profile */}
        <div className='me'>
          <h1 className='me-name'>payapaya</h1>
          <p className='me-description'>Web Engineer</p>
        </div>

        {/* about */}
        <section className='section' id='about'>
          <h2 className='section-title'>About</h2>
          <p className='about-description'>
            Hello, I'm WEB Engineer.
          </p>
        </section>

        {/* works */}
        <section className='section' id='works'>
          <h2 className='section-title'></h2>
          <ul>
            <li className='work-item'>
              <img className='work-item-img' src='https://dummyimage.com/600x300/eee/ccc' />
            </li>
            <h3 className='work-item-category'>2018 - react</h3>
            <h3 className='work-item-title'>sample1</h3>
          </ul>
          <ul>
            <li className='work-item'>
              <img className='work-item-img' src='https://dummyimage.com/600x300/eee/ccc' />
            </li>
            <h3 className='work-item-category'>2019 - react</h3>
            <h3 className='work-item-title'>sample2</h3>
          </ul>
        </section>

        {/* footer */}
        <footer>
          Copyright &copy; samle. All right All Rights reserved.
        </footer>

      </div>
    );
  }
}

export default App;
