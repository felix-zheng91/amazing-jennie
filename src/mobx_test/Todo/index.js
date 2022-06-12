import "./index.css";
import { useStore } from "../store";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Task() {
  // useStore
  const { taskStore } = useStore();
  const [taskName, setTaskName] = useState("");

  // 单选受控
  function updateOne(id, isDone) {
    taskStore.updateOne(id, isDone);
  }
  // 全选受控
  function updateAll(isDone) {
    taskStore.updateAll(isDone);
  }

  function deleteTask(id) {
    // console.log(id);
    taskStore.deleteTask(id);
  }

  function addTask(e) {
    if (e.key === "Enter" && taskName) {
      taskStore.addTask({ id: uuid(), name: taskName, isDone: false });
      setTaskName("");
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          placeholder="What needs to be done?"
          onKeyUp={(event) => addTask(event)}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={(event) => updateAll(event.target.checked)}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {taskStore.taskList.map((task) => {
            return (
              <li
                key={task.id}
                className={task.isDone ? "todo completed" : "todo"}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onChange={(event) =>
                      updateOne(task.id, event.target.checked)
                    }
                    checked={task.isDone}
                  />
                  <label>{task.name}</label>
                  <button
                    className="destroy"
                    onClick={() => deleteTask(task.id)}
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <footer className={"footer"}>
        <span className="todo-count">
          任务总数：{taskStore.taskList.length} 已完成：
          {taskStore.taskList.filter((task) => task.isDone).length}
        </span>
      </footer>
    </section>
  );
}

export default observer(Task);
