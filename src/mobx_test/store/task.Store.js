import { makeAutoObservable } from "mobx";

class TaskStore {
  taskList = [
    { id: 1, name: "Learn React", isDone: true },
    { id: 2, name: "Learn Mobx", isDone: false },
    { id: 3, name: "Use Mobx", isDone: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  updateAll(isDone) {
    console.log("All Done");
    this.taskList.forEach((task) => {
      task.isDone = isDone;
    });
    console.log(this.taskList);
  }

  updateOne(id, isDone) {
    const task = this.taskList.find((task) => task.id === id);
    task.isDone = isDone;
  }

  deleteTask = (id) => {
    /*for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === id) {
        this.taskList.slice(i, 1);
      }
    }*/
    this.taskList = this.taskList.filter((task) => id !== task.id);
  };

  addTask = (task) => {
    this.taskList.push(task);
  };
}

export default TaskStore;
