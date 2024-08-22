import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  onEditTodo,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
