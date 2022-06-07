import React, { Component } from "react";

// Children 属性, 使用组件时，使用非自闭和写法，可在组件标签中传入 函数，jsx，标签，数据 等内容，传入的内容在子组件中children属性中

function Item({ children }) {
  return <div>This is item {children}</div>;
}

class App extends Component {
  state = {
    message: "This is a message",
  };

  render() {
    return (
      <div>
        <Item>{123}</Item>
      </div>
    );
  }
}

export default App;
