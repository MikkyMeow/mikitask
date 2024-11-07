import {
  Checkbox,
  IconButton,
  List as MuiList,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { todoStore } from "../../../../store/todo.store";
import { DeleteOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const navigate = useNavigate();
  const { todos, removeTodo, toggleTodo } = todoStore();
  return (
    <MuiList>
      {todos.map((todo) => (
        <ListItemButton disableGutters key={todo.id}>
          <Checkbox
            value={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <ListItemText
            onClick={() => navigate(`/todo/${todo.id}`)}
            primary={todo.title}
            secondary={todo.description}
          />
          <IconButton onClick={() => removeTodo(todo.id)}>
            <DeleteOutlined />
          </IconButton>
        </ListItemButton>
      ))}
    </MuiList>
  );
};
