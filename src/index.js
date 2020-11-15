import React from 'react';
import ReactDOM from 'react-dom';

// 函数式组件
// function ChildCom(props) {
//   const subTitle = <span>函数式组件副标题</span>;
//   const weather = props.weather;
//   const isGo = weather === 'good' ? '出门' : '不出门';
//   console.log(props);
//   return (
//     <div>
//       <h1>函数式组件Hello World</h1>
//       {subTitle}
//       <p>{isGo}</p>
//     </div>
//   );
// }

// 类组件
class ChildCom extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>类组件Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<ChildCom weather="good" />, document.querySelector('#root'));
