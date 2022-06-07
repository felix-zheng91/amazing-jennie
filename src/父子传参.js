import React, { Component } from "react";

/**
 * 父子组件传参
 * 1. 单向的 父 -> 子
 * 2. 子不可更改属性
 * 3. 可传递各种类型，包括函数， JSX
 *
 * 子传父 可以使用 在父级传递的函数中处理
 */
class App extends Component {
  state = {
    message: "This is parent's message",
  };

  testFun = (sss) => {
    console.log("父级函数");
    console.log(sss);
  };

  render() {
    return (
      <>
        <SonClass
          message={this.state.message}
          fun={this.testFun}
          testJsx={<p>JSX</p>}
        />
        <SonFunction
          message={this.state.message}
          fun={this.testFun}
          testJsx={<p>JSX</p>}
        />
      </>
    );
  }
}

class SonClass extends Component {
  render() {
    // 类组件获取父组件属性写法
    return (
      <div>
        Son By Class, {this.props.message}
        <button onClick={() => this.props.fun("子组件传递的参数")}>
          触发父函数
        </button>
        {this.props.testJsx}
      </div>
    );
  }
}

// 函数组件获取父组件属性 需要在参数添加 props
// 也可在参数列表处结构参数
function SonFunction({ message, fun, testJsx }) {
  // 参数解构
  // const { message, fun, testJsx } = props;
  return (
    <div>
      Son By Function, {message}
      <button onClick={fun}>触发</button>
      {testJsx}
    </div>
  );
}

export default App;
