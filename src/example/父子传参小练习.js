import React, { Component } from "react";

// 通信结合使用
function Item(/*子组件接收父组件传参, 解构 props 参数*/ { item, delItem }) {
  function deleteItem(id) {
    delItem(id);
  }
  return (
    <div>
      <>
        <h3>{item.name}</h3>
        <div>{item.price}</div>
        <div>{item.info}</div>
        <button onClick={() => deleteItem(item.id)}>删除</button>
      </>
    </div>
  );
}

class App extends Component {
  state = {
    list: [
      { id: 1, name: "小芳", price: 300, info: "GG" },
      { id: 2, name: "小美", price: 370, info: "NG" },
      { id: 3, name: "小胖", price: 600, info: "BG" },
    ],
  };

  // 给子组件传递函数的方式,接收子组件传递给父组件的参数
  delItem = (id) => {
    this.setState({
      list: [...this.state.list.filter((item) => item.id !== id)],
    });
  };

  render() {
    return (
      <div>
        {this.state.list.map((item) => {
          return (
            <Item
              key={item.id}
              /*自定义属性的方式给子组件传参*/ item={item}
              delItem={this.delItem}
            ></Item>
          );
        })}
      </div>
    );
  }
}

export default App;
