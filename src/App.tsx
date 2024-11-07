import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { StyledEngineProvider } from "@mui/material";
import "./styles/index.css";

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
        finance: "Finance",
      },
    },
    ru: {
      translation: {
        today: "Сегодня",
        notes: "Заметки",
        todo: "Список дел",
        projects: "Проекты",
        habits: "Привычки",
        finance: "Финансы",
      },
    },
  },
  fallbackLng: ["en", "ru"],
  interpolation: {
    escapeValue: false,
  },
});

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
};
