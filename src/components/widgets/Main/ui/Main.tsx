import { MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Nav } from "components/widgets/Nav";
import { Outlet } from "react-router-dom";
import { appStore } from "store/app.store";

export const Main = () => {
  const { setShowMenu } = appStore();

  return (
    <div>
      <IconButton onClick={() => setShowMenu(true)}>
        <MenuOutlined />
      </IconButton>
      <Nav />
      <Outlet />
    </div>
  );
};
