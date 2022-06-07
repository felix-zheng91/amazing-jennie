import React, { Component, createContext } from "react";

// 通过 Context 跨组件传值 语法固定

const { Consumer, Provider } = createContext();

function ComponentA() {
  return (
    <div>
      ComponentA <ComponentC />
    </div>
  );
}

function ComponentC() {
  return (
    <div>
      ComponentC <Consumer>{(value) => value}</Consumer>
    </div>
  );
}

class App extends Component {
  state = {
    message: "This is message",
  };
  render() {
    return (
      <Provider value={this.state.message}>
        <div>
          <ComponentA />
        </div>
      </Provider>
    );
  }
}

export default App;
