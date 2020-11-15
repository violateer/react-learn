import React from 'react';
import ReactDOM from 'react-dom';

// React State
class Clock extends React.Component {
  constructor(props) {
    super(props);
    // 状态(数据) --> view
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  render() {
    this.state.time = new Date().toLocaleTimeString();
    return (
      <div>
        <h1>当前时间：{this.state.time}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#root'));

setInterval(() => {
  ReactDOM.render(<Clock />, document.querySelector('#root'));
}, 1000);
