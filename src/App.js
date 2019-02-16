import React, { Component } from 'react';

import Header from './template/Header';
import Footer from './template/Footer';

import Work from './Work';

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
          <Work />
        </section>

        {/* footer */}
        <Footer />

      </div>
    );
  }
}

export default App;
