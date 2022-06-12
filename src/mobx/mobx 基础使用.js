import React from "react";
/*导入store实例和 mobx react 链接中间件*/
import { countStore } from "./store/counter.Store";
import { observer } from "mobx-react-lite";

// mobx 用于管理业务数据状态， 业务状态数据修改逻辑
// react 渲染业务数据 UI临时状态（如页面输入框内容）事件触发以及mobx使用
function App() {
  return (
    <div>
      {/*使用store中的数据*/}
      {countStore.count}
      {/*修改store中的数据*/}
      <button onClick={countStore.addCount}>++</button>
      {/* 使用计算属性  */}
      {countStore.filterList.join("-")}
      <button onClick={countStore.addList}>ChangeArray</button>
    </div>
  );
}
// 包裹App让组件视图响应数据变化
export default observer(App);
