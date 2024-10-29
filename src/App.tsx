import { MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Nav } from "components/widgets/Nav";
import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import { appStore } from "store/app.store";

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
  const { setShowMenu } = appStore();

  return (
    <div>
      <IconButton onClick={() => setShowMenu(true)}>
        <MenuOutlined />
      </IconButton>
      <Nav />
    </div>
  );
};
