import { IconButton } from "@mui/material";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";
import { SaveOutlined } from "@mui/icons-material";
import { todoStore } from "../store/todo.store";

export const Todo = () => {
  return (
    <div>
      <List />
      <AddTodo />
    </div>
  );
};
