import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { router } from "router";

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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
