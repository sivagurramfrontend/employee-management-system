import { useState } from "react";

function InputDemo() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">

      <h1 className="text-3xl font-bold">
        Hello {name || "Guest"}
      </h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 rounded px-4 py-2 w-80"
      />

    </div>
  );
}

export default InputDemo;