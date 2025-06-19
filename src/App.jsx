import Accordian from "./Accordian";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/taskData";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };
  //handler
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };
  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };
  return (
    <div className="container bg-amber-400 mx-auto">
      {/* <Accordian /> */}
      <h3 className="text-2xl font-bold text-center mb-5">
        Task maintan project
      </h3>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
