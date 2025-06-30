import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/taskData";
import taskReducer from "./reducers/taskReducer";
import { TaskContext, TaskDispatchContext } from "./context/TaskContext";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <div className="container bg-amber-400 mx-auto">
          {/* <Accordian /> */}
          <h3 className="text-2xl font-bold text-center mb-5">
            Task maintan project
          </h3>
          <AddTask />
          <TaskList />
        </div>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
