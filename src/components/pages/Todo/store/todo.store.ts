import { create } from "zustand";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  tags?: string[];
  dueDate?: number;
  priority?: "low" | "medium" | "high";
}

interface ITodoStore {
  todos: ITodo[];
  isSaved: boolean;
  addTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: Partial<ITodo>) => void;
  saveLocalStorage: (todos: ITodo[]) => void;
}

export const todoStore = create<ITodoStore>((set) => ({
  todos: JSON.parse(localStorage.getItem("todos")!) || [],
  isSaved: true,
  addTodo: (todo) =>
    set((state) => ({ todos: [...state.todos, todo], isSaved: false })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
      isSaved: false,
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
      isSaved: false,
    })),
  updateTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, ...updatedTodo } : t
      ),
      isSaved: false,
    })),
  saveLocalStorage: (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
    set((state) => ({ ...state, todos, isSaved: true }));
  },
}));
