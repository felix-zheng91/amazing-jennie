// 组合子模块 封装统一导出
import { CounterStore } from "./counter.Store";
import { ListStore } from "./list.Store";
import React from "react";

class RootStore {
  constructor() {
    //  实例化子模块,日后实例话根Store时，根Store将有子模块两个实例对象属性。
    this.counterStore = new CounterStore();
    this.listStore = new ListStore();
  }
}

// 实例化操作
const rootStore = new RootStore();
// 使用react context 机制完成统一实例化
// Provider value={传递的参数}
// 查找机制：useContext 优先从Provider value 查找，如果无法找 则找 createContext 方法传递过来的默认参数
const context = React.createContext(rootStore);

// useStore 方法用于通过 useContext 拿到 rootStore 实例对象 然后返回
// 只需在业务组件中调用 useStore 即可获取
const useStore = () => React.useContext(context);

export { useStore };
