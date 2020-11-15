import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// const exampleStyle = {
//   background: 'skyblue',
//   borderBottom: '1px solid red',
// };

const exampleStyle = ['font', 'bg'].join(' ');

const element = (
  <div>
    {/* 这里写注释 */}
    <h1 className={exampleStyle}>Hello World</h1>
  </div>
);

ReactDOM.render(element, document.querySelector('#root'));
