import { TaskContext } from "../context/TaskContext";
import Task from "./Task";
import { useContext } from "react";

export default function TaskList() {
  const tasks = useContext(TaskContext);
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} taskData={task} />
        ))}
      </ul>
    </>
  );
}
