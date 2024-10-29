import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
import { Drawer, IconButton, List, ListItemButton } from "@mui/material";
import i18n, { t } from "i18next";
import { useState } from "react";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        today: "Today",
        notes: "Notes",
        todo: "Todo",
        projects: "Projects",
        habits: "Habits",
        financialManager: "Financial Manager",
      },
    },
    ru: {
      translation: {
        today: "Сегодня",
        notes: "Заметки",
        todo: "Список дел",
        projects: "Проекты",
        habits: "Привычки",
        financialManager: "Финансовый менеджер",
      },
    },
  },
  fallbackLng: ["en", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

export const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setShowMenu(!showMenu)}>
        <MenuOutlined />
      </IconButton>
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
    </div>
  );
};
