import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Todo List
      </h1>

      <div className="flex gap-2 mb-5">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 border border-gray-300 rounded-lg p-2 outline-none"
        />

        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-lg"
        >
          Add
        </button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">
            No tasks added
          </p>
        ) : (
          tasks.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 rounded-lg p-3 mb-3"
            >
              <p>{item}</p>

              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Todo;