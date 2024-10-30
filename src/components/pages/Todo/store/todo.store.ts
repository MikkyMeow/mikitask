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
  addTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: Partial<ITodo>) => void;
}

export const todoStore = create<ITodoStore>((set) => ({
  todos: [
    {
      id: 0,
      title: "awd",
      completed: false,
      description: "little description",
    },
    { id: 1, title: "twelve", completed: true },
    { id: 2, title: "thirdec", completed: false },
  ],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
  updateTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, ...updatedTodo } : t
      ),
    })),
}));
