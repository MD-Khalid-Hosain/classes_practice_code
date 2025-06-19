import { useState } from "react";
export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="add task"
        className="w-40 bg-white m-5 rounded-md p-2"
        onChange={handleChangeText}
      />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
        className="bg-blue-500 rounded-md py-2 px-4 text-white cursor-pointer"
      >
        Add
      </button>
    </>
  );
}
