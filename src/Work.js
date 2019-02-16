import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { 
          category: '2018 - react',
          title: 'samle1'
        },
        { 
          category: '2019 - react',
          title: 'samle2'
        }
      ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, i) => {
          return <li key={i} className='work-item'>
            <img className='work-item-img' src='https://dummyimage.com/600x300/eee/ccc' />
            <h3 className='work-item-category'>{item.category}</h3>
            <h3 className='work-item-title'>{item.title}</h3>
          </li>
        })}
      </ul>
    );
  }
}

export default Work;