import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    onNewTodo,
    onEditTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosPendientes,
  } = useTodos();

  return (
    <>
      <h1>
        Numero total de tareas: {todosCount}
        <hr />
        <small> Tareas pendientes: {todosPendientes} </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={onNewTodo} />
        </div>
        <div className="col-12 col-md-7">
          <TodoList
            todos={todos}
            onEditTodo={onEditTodo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
    </>
  );
};
