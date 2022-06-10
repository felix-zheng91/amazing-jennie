import React, { useEffect, useState } from "react";
import { useWindowScroll } from "../hooks/useWindowScroll";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Counter({ countInit }) {
  // useState 可以传入函数，处理复杂初始值
  const [count, setCount] = useState(() => {
    return countInit;
  });
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Test 定时器执行");
    }, 1000);
    // 清理函数，组件销毁时执行
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>This is Test</div>;
}

function App() {
  const [y] = useWindowScroll();
  const [message, setMessage] = useLocalStorage("Hook-key", "寻欢");

  const [flag, setFlag] = useState(true);

  setTimeout(() => {
    setMessage("阿飞");
  }, 5000);

  return (
    <div style={{ height: "1200px" }}>
      <p>
        {y}:{message}
      </p>
      <Counter countInit={1} />
      {flag ? <Test /> : null}
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Switch
      </button>
    </div>
  );
}

export default App;
