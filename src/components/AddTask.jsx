import { useState } from "react";
export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
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
          onAdd(text);
          setText("");
        }}
        className="bg-blue-500 rounded-md py-2 px-4 text-white cursor-pointer"
      >
        Add
      </button>
    </>
  );
}
