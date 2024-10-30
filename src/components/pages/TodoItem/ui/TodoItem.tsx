import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { todoStore } from "components/pages/Todo/store/todo.store";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./TodoItem.module.css";

export const TodoItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todos, updateTodo } = todoStore();
  const [todo, setTodo] = useState(todos.find((t) => t.id === +id!)!);

  return (
    <div className={styles.root}>
      <IconButton
        onClick={() => navigate("/todo")}
        className={styles.backButton}
      >
        <ArrowBackIosNewOutlined />
      </IconButton>
      <TextField
        label="Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <TextField
        label="Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <Button
        variant="outlined"
        onClick={() => {
          updateTodo(todo.id, todo);
          navigate("/todo");
        }}
      >
        Update
      </Button>
    </div>
  );
};
