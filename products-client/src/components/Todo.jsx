import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos } from "../helpers/functions";

const Todo = () => {
  const [todos, setTodos] = useState(getTodos());

  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const todoItem = form.todo.value;
    const todo = {
      id: Math.floor(Math.random() * 9999999),
      todo: todoItem,
      done: false,
    };
    form.reset();

    const idx = todos.findIndex((td) => td.todo === todo.todo);

    if (idx === -1) {
      setTodos([...todos, todo]);
    }

    // Add to localStorage
    addTodo(todo);
  };

  const handleDelete = (id) => {
    const res = confirm("Are you sure?");
    if (res) {
      const updated = deleteTodo(id);
      setTodos([...updated]);
    }
  };

  const handleDone = (id) => {
    const todo = todos.find((td) => td.id === id);
    const updatedTodo = [{ ...todo, done: true }];

    console.log(updatedTodo);
  };

  return (
    <div className="max-w-xs mx-auto my-20">
      <div className="relative">
        <h1 className="relative z-10 font-extrabold text-5xl text-center">
          Todos
        </h1>
        <div className="absolute -top-2.5 left-16 w-12 h-12 rounded-full bg-warning"></div>
      </div>
      <form onSubmit={handleAdd}>
        <div className="mt-10 mb-2">
          <input
            name="todo"
            type="text"
            className="border p-2 w-full border-orange-400 outline-none rounded-lg"
            placeholder="Write todo..."
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-warning font-bold uppercase"
        >
          Add
        </button>
      </form>
      <div className="mt-10 mb-2">
        Total Todo{todos.length > 1 ? "s" : ""} - {todos.length}
        {todos.map((td) => (
          <div key={td.id}>
            <h3 className="border my-2 p-2 rounded-lg border-orange-400 flex justify-between items-center gap-4">
              {td.todo}
              <div className="flex gap-2">
                <button
                  onClick={() => handleDone(td.id)}
                  className="btn btn-accent text-white btn-xs"
                >
                  Done
                </button>
                <button
                  onClick={() => handleDelete(td.id)}
                  className="btn btn-warning btn-xs"
                >
                  Delete
                </button>
              </div>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
