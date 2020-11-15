import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    // 设置状态(数据)
    this.state = {
      c1: 'content active',
      c2: 'content',
    };

    // 绑定this
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    let index = e.target.dataset.index;
    if (index === '1') {
      this.setState({
        c1: 'content active',
        c2: 'content',
      });
    } else {
      this.setState({
        c1: 'content',
        c2: 'content active',
      });
    }
  }

  render() {
    return (
      <div>
        <button data-index="1" onClick={this.clickEvent}>
          内容1
        </button>
        <button data-index="2" onClick={this.clickEvent}>
          内容2
        </button>
        <div className={this.state.c1}>
          <h1>内容1</h1>
        </div>
        <div className={this.state.c2}>
          <h1>内容2</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Tab />, document.querySelector('#root'));
