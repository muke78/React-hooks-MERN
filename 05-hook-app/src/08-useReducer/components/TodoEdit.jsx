import { useForm } from "../../hooks/useForm";

export const TodoEdit = ({ item, setIsLoading, onEditTodo }) => {
  const { descripcionEditar, onInputChange, onResetForm } = useForm({
    descripcionEditar: item.description,
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const editTodo = {
      id: item.id,
      done: item.done,
      description: descripcionEditar,
    };
    // console.log(editTodo)
    onEditTodo(editTodo);
    setIsLoading(true);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onSubmit} aria-label="form">
        <input
          type="text"
          autoFocus
          placeholder="Editemos algo"
          className="form-control w-100"
          name="descripcionEditar"
          value={descripcionEditar}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
