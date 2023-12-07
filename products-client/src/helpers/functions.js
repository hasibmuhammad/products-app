const getTodos = () => {
  if (JSON.parse(localStorage.getItem("todos"))) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

const addTodo = (todo) => {
  const todos = getTodos();
  if (todos.length === 0) {
    console.log("firstone");

    const newTodo = [...todos, todo];

    localStorage.setItem("todos", JSON.stringify(newTodo));
  }

  if (todos.length > 0) {
    const idx = todos.findIndex((td) => td.todo === todo.todo);

    if (idx === -1) {
      const newTodo = [...todos, todo];

      localStorage.setItem("todos", JSON.stringify(newTodo));
    }
  }
};

const deleteTodo = (id) => {
  // get all todos
  // update the todos except the clicked one

  const todos = getTodos();
  if (todos.length > 0) {
    const updated = todos.filter((td) => td.id !== id);
    localStorage.setItem("todos", JSON.stringify(updated));

    return updated;
  }
};

export { getTodos, addTodo, deleteTodo };
