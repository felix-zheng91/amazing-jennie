// mobx

import { makeAutoObservable } from "mobx";

class CounterStore {
  // 1.定义数据状态
  count = 0;
  list = [1, 2, 3];

  constructor() {
    // 2.数据响应式处理
    makeAutoObservable(this);
  }
  // 3.定义action函数
  addCount = () => {
    this.count++;
  };
  // computed 计算属性
  get filterList() {
    return this.list.filter((item) => item > 1);
  }

  addList = () => {
    this.list.push(4, 5, 6, 7, 8, 9);
  };
}

// 4.实例化并导出实例
// const counterStore = new CounterStore();
// export {counterStore};
export { CounterStore };
