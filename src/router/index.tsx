import { Finance } from "components/pages/Finance";
import { Todo } from "components/pages/Todo";
import { TodoItem } from "components/pages/TodoItem";
import { Main } from "components/widgets/Main";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Navigate to="/todo" /> },
      { path: "/notes", element: <h1>Notes</h1> },
      { path: "/todo", element: <Todo /> },
      { path: "/todo/:id", element: <TodoItem /> },
      { path: "/projects", element: <h1>Projects</h1> },
      { path: "/habits", element: <h1>Habits</h1> },
      { path: "/finance", element: <Finance /> },
    ],
  },
]);
