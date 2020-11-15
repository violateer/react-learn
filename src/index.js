import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// const time = new Date().toLocaleTimeString();
// const strTime = '现在的时间是：';
// const element = (
//   <div>
//     <h1>Hello World!</h1>
//     <h2>{strTime + time}</h2>
//   </div>
// );

// const status = 0;
// const element2 = (
//   <div>
//     <h1>今天是否隔离</h1>
//     <h2>{status === 0 ? '隔离' : '不隔离'}</h2>
//   </div>
// );

// const element2 = (
//   <div>
//     <h1>今天是否隔离</h1>
//     <h2>{status === 0 ? <button>隔离</button> : <button>不隔离</button>}</h2>
//   </div>
// );

// html的样式类名要写为className，因为class在js中是关键词
const bgColor = 'bgRed';
const element = <div className={bgColor}>红色的背景颜色</div>;

// ReactDOM.render(element, document.querySelector('#root'));
ReactDOM.render(element, document.querySelector('#root'));
