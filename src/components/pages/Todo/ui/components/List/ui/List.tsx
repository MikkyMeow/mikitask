import {
  Checkbox,
  IconButton,
  List as MuiList,
  ListItem,
  ListItemText,
} from "@mui/material";
import { todoStore } from "../../../../store/todo.store";
import { DeleteOutlined } from "@mui/icons-material";

export const List = () => {
  const { todos, removeTodo, toggleTodo } = todoStore();
  return (
    <MuiList>
      {todos.map((todo) => (
        <ListItem key={todo.id} disablePadding>
          <Checkbox
            value={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <ListItemText primary={todo.title} secondary={todo.description} />
          <IconButton onClick={() => removeTodo(todo.id)}>
            <DeleteOutlined />
          </IconButton>
        </ListItem>
      ))}
    </MuiList>
  );
};
