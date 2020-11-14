import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 实现时刻的显示
// function clock() {
//   const time = new Date().toLocaleTimeString();
//   const element = (
//     <div>
//       <h1>现在的时间是：{time}</h1>
//     </div>
//   );
//   const root = document.querySelector('#root');
//   ReactDOM.render(element, root);
// }

// clock();

// setInterval(clock, 1000);

// react函数式组件
function Clock(props) {
  return (
    <div>
      <h1>现在的时间是：{props.date.toLocaleTimeString()}</h1>
    </div>
  );
}

function run() {
  ReactDOM.render(<Clock date={new Date()} />, document.querySelector('#root'));
}

run();

setInterval(run, 1000);
