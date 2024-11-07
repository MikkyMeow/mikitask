import { AddOutlined } from "@mui/icons-material";
import { IconButton, OutlinedInput } from "@mui/material";
import { todoStore } from "components/pages/Todo/store/todo.store";
import { useState } from "react";

export const AddTodo = () => {
  const { addTodo } = todoStore();
  const [value, setValue] = useState("");

  return (
    <OutlinedInput
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      endAdornment={
        <IconButton
          onClick={(e) => {
            addTodo({
              id: Math.random(),
              title: value,
              completed: false,
            });
            setValue("");
          }}
        >
          <AddOutlined />
        </IconButton>
      }
    />
  );
};
