import React, { useEffect, useState } from "react";

/*
  Hook 学习
 */
function App() {
  // 1. 使用解构赋值方式 定义数据状态以及状态修改的函数
  // 2. useState(param) param 相当于初始化赋值
  // 3. 名字可自定义,顺序不可更换
  // 4. 修改 count 需要使用 setCount 方法,不能直接修改原值
  // 5. 俩属性绑定, 后者只能用来修改前者的值
  // 6. hook 只能定义在函数最外层
  // 初始化与更新时都会调用
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Elias");

  /**
   * useEffect 每次组件更新时都会执行
   * 第二个参数为依赖项,当传入空数组时,将只执行一次,后续组件更新时不会执行
   * 依赖项中可以放入多个属性,当依赖项中属性更新时, useEffect 就会执行
   */
  useEffect(() => {
    document.title = count.toString();
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName("Jennie")}>{name}</button>
    </div>
  );
}

export default App;
