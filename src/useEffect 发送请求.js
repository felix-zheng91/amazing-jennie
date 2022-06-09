import React, { useEffect } from "react";

// useEffect 发送请求
function App() {
  useEffect(() => {
    async function loadData() {
      fetch("http://geek.itheima.net/v1_0/channels")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    loadData();
    return () => {};
  }, []);

  return <div>App</div>;
}

export default App;
