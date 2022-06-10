import React, { Component } from "react";

class Test extends Component {
  timer = null;
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("定时器开启");
    }, 1000);
    console.log("componentDidMount");
  }

  // 组件卸载执行 (清理定时器)
  componentWillUnmount() {
    console.log("Test componentWillUnmount");
    // 清理定时器
    clearInterval(this.timer);
  }

  render() {
    return <div>Test</div>;
  }
}

class App extends Component {
  // 类似 Java 类型,初始化时执行一次 初始化state 创建ref,使用bind解决this指向问题
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    count: 1,
    flag: true,
  };
  // 组件挂载后执行 (发送网络请求, DOM操作)
  componentDidMount() {
    console.log("componentDidMount");
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag,
    });
  };

  // 组件更新完成执行
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  // 每次更新时执行 (渲染UI)
  render() {
    console.log("render");
    return (
      <div>
        App Counter: {this.state.count} {this.state.flag ? <Test /> : null}
        <button onClick={this.handleClick}>Count++</button>
      </div>
    );
  }
}

export default App;
