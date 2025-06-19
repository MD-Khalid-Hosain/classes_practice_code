import { useState } from "react";
export default function Task({ taskData, onDeleteTask, onChangeTask }) {
  const [isEaditing, setIsEaditing] = useState(false);
  let taskContent;
  if (isEaditing) {
    taskContent = (
      <>
        <input
          type="text"
          className="w-40 bg-white m-3 rounded-md p-2"
          value={taskData.text}
          onChange={(e) => {
            onChangeTask({
              ...taskData,
              text: e.target.value,
            });
          }}
        />
        <button
          onClick={() => setIsEaditing(false)}
          className="bg-green-500 rounded-md py-2 px-4 text-white cursor-pointer mr-2"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p className="mx-3">{taskData.text}</p>{" "}
        <button
          onClick={() => setIsEaditing(true)}
          className="bg-green-500 rounded-md py-2 px-4 text-white cursor-pointer mr-2"
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <li className="mb-1">
      <label htmlFor="task" className="flex items-center">
        <input
          type="checkbox"
          checked={taskData.done}
          onChange={(e) => {
            onChangeTask({
              ...taskData,
              done: e.target.checked,
            });
          }}
          className="h-5 w-5 ml-2"
        />
        {taskContent}
        <button
          onClick={() => onDeleteTask(Task.id)}
          className="bg-red-500 rounded-md py-2 px-4 text-white cursor-pointer"
        >
          Delete
        </button>
      </label>
    </li>
  );
}
