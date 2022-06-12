import TaskStore from "./task.Store";
import React from "react";

class RootStore {
  constructor() {
    this.taskStore = new TaskStore();
  }
}

const context = React.createContext(new RootStore());

export const useStore = () => {
  return React.useContext(context);
};
