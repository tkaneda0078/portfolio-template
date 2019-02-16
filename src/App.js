import React, { Component } from 'react';

import Header from './template/Header';
import Footer from './template/Footer';

class App extends Component {
  render() {
    return(
      <div className='app'>
        {/* header */}
        <Header />

        {/* profile */}
        <div className='me'>
          <h1 className='me-title'>payapaya</h1>
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
        <Footer />

      </div>
    );
  }
}

export default App;
