import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/taskData";
import taskReducer from "./reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };
  //handler
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextId(tasks),
    });
  };
  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      taskId,
    });
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
