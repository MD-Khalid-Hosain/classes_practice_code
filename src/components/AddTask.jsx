import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "../context/TaskContext";
import { getNextId } from "../utils/getNextId";
export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);
  return (
    <>
      <input
        type="text"
        placeholder="add task"
        className="w-40 bg-white m-5 rounded-md p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
          setText("");
        }}
        className="bg-blue-500 rounded-md py-2 px-4 text-white cursor-pointer"
      >
        Add
      </button>
    </>
  );
}
