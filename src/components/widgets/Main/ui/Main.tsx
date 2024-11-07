import { MenuOutlined, SaveOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Nav } from "components/widgets/Nav";
import { Outlet } from "react-router-dom";
import { appStore } from "store/app.store";
import styles from "./Main.module.css";
import { todoStore } from "components/pages/Todo/store/todo.store";

export const Main = () => {
  const { setShowMenu } = appStore();
  const { saveLocalStorage, todos, isSaved } = todoStore();

  return (
    <div className={styles.root}>
      <div className={styles.bar}>
        <IconButton onClick={() => setShowMenu(true)}>
          <MenuOutlined />
        </IconButton>
        <IconButton disabled={isSaved} onClick={() => saveLocalStorage(todos)}>
          <SaveOutlined />
        </IconButton>
      </div>
      <Nav />
      <Outlet />
    </div>
  );
};
