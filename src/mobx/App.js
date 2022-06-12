import React from "react";
/*导入store实例和 mobx react 链接中间件*/
import { observer } from "mobx-react-lite";
import { useStore } from "./store";

function App() {
  const { counterStore } = useStore();
  return (
    <div>
      {counterStore.count} <button onClick={counterStore.addCount}>Add</button>
    </div>
  );
}
// 包裹App让组件视图响应数据变化
export default observer(App);
