import { CloseOutlined } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { appStore } from "store/app.store";

export const Nav = () => {
  const { t } = useTranslation();
  const { showMenu, setShowMenu } = appStore();

  return (
    <Drawer open={showMenu} onClose={() => setShowMenu(false)}>
      <IconButton onClick={() => setShowMenu(false)}>
        <CloseOutlined />
      </IconButton>
      <List>
        <ListItemButton
          component={Link}
          to="/"
          onClick={() => setShowMenu(false)}
        >
          <ListItemText primary={t("today")} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/notes"
          onClick={() => setShowMenu(false)}
        >
          <ListItemText primary={t("notes")} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/todo"
          onClick={() => setShowMenu(false)}
        >
          <ListItemText primary={t("todo")} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/projects"
          onClick={() => setShowMenu(false)}
        >
          <ListItemText primary={t("projects")} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/habits"
          onClick={() => setShowMenu(false)}
        >
          <ListItemText primary={t("habits")} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/finance"
          onClick={() => setShowMenu(false)}
        >
          <ListItemText primary={t("financialManager")} />
        </ListItemButton>
      </List>
    </Drawer>
  );
};
