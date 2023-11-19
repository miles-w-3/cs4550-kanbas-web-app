import { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = `${process.env.REACT_APP_KANBAS_BACKEND}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo) => {
    const response = await axios
      .delete(`${API}/${todo.id}`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const updateTodo = async () => {
    await axios.put(
      `${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (
      t.id === todo.id ? todo : t)));
    setTodo({});
  };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };


  useEffect(() => {
    fetchTodos();
  }, []);


  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })} />
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        placeholder="todo name"
        className="form-control mb-2"
        type="text"
      />
      <textarea
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })}
        value={todo.description} type="text"
      />
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })}
        value={todo.due} type="date"
      />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-success">
        Post Todo
      </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>
      <button onClick={createTodo}
        className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
        className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">
            <button
              onClick={() => removeTodo(todo)}
              className="ms-2 btn btn-danger float-end" >
              Remove
            </button>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="ms-2 btn btn-warning me-2 float-end" >
              Edit
            </button>
            <input className="me-2"
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      <a href={`${API}/${todo.id}`}
        className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}/${todo.id}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}
        className="btn btn-primary me-2">
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
        className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
    </div>
  );
}
export default WorkingWithArrays;