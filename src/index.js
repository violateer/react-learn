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
    // this.state.time = new Date().toLocaleTimeString();
    return (
      <div>
        <h1>当前时间：{this.state.time}</h1>
      </div>
    );
  }

  // 生命周期函数 componentDidMount  组件渲染完成时调用
  componentDidMount() {
    setInterval(() => {
      // 不要用这种方式
      // this.state.time = new Date().toLocaleTimeString();

      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
}

ReactDOM.render(<Clock />, document.querySelector('#root'));

// setInterval(() => {
//   ReactDOM.render(<Clock />, document.querySelector('#root'));
// }, 1000);
