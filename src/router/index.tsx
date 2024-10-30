import { Main } from "components/widgets/Main";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <h1>Today home</h1> },
      { path: "/notes", element: <h1>Notes</h1> },
      { path: "/todo", element: <h1>Todo</h1> },
      { path: "/projects", element: <h1>Projects</h1> },
      { path: "/habits", element: <h1>Habits</h1> },
      { path: "/finance", element: <h1>Financial manager</h1> },
    ],
  },
]);