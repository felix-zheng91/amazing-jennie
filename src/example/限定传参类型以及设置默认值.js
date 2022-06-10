import React, { Component } from "react";
import PropTypes from "prop-types";

// prop-types 参数类型校验,参数默认值设置
// 参数类型定义
Test.propTypes = {
  list: PropTypes.array.isRequired,
};

// 方式一 参数默认值设置
// Test.defaultProps = {
//   list: [1, 2, 3, 4, 5],
// };

function Test(/*方式二 函数式默认值,官方推荐写法*/ { list = [1, 2, 3, 4] }) {
  return (
    <div>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

class TestComponent extends React.Component {
  // 类组件 props 类型限定以及默认 Props 写法 可以使用上面的方法一类型以及此处的方式
  static propTypes = {
    pageSize: PropTypes.number.isRequired,
  };

  static defaultProps = { pageSize: 20 };
  render() {
    return <div>Test Component {this.props.pageSize}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Test list={["aaa", 123, "好的"]} />
        <TestComponent pageSize={15} />
      </div>
    );
  }
}

export default App;
