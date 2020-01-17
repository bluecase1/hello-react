import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = 'Are you awesome?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }

    return (
      <div class="my-div">
        <h1>Hello, React</h1>
        <h2>{text}</h2>
        {condition && 'show'}
        <div 
          style={style}
        // 주석이 된다?
        // 안된다??
        />

        { /* 안나옴.... */}
        //나옴
        /* 역시 나옴 */
      </div>
    );
  }
}

export default App;