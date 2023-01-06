function getTodosFromLocalStorage() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }

  function saveTodosToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
