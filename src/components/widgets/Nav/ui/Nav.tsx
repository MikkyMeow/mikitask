import { CloseOutlined } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItemButton } from "@mui/material";
import { useTranslation } from "react-i18next";
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
        <ListItemButton>{t("today")}</ListItemButton>
        <ListItemButton>{t("notes")}</ListItemButton>
        <ListItemButton>{t("todo")}</ListItemButton>
        <ListItemButton>{t("projects")}</ListItemButton>
        <ListItemButton>{t("habits")}</ListItemButton>
        <ListItemButton>{t("financialManager")}</ListItemButton>
      </List>
    </Drawer>
  );
};
