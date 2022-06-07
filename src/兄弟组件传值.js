import React, { Component } from "react";

// 兄弟组件参数传递， 先传给父组件，然后经由父组件传递给子组件
class App extends Component {
  state = {
    nameB: "",
  };

  getName = (name) => {
    this.setState({
      nameB: name,
    });
  };

  render() {
    return (
      <div>
        {/*父组件传递给子组件*/}
        <SonA nameB={this.state.nameB} />
        <SonB getName={this.getName} />
      </div>
    );
  }
}

function SonA({ nameB }) {
  function printGetMsg() {
    alert(nameB);
  }
  return (
    <div>
      SonA <button onClick={printGetMsg}>打印接收到的数据</button>
    </div>
  );
}

// 子组件传递给父组件
function SonB({ getName }) {
  function sendName() {
    getName(nameB);
  }

  const nameB = "SonB";
  return (
    <div>
      SonB <button onClick={sendName}>SendName</button>
    </div>
  );
}

export default App;
