import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: string;
    text: string;
    status: 'active' | 'completed' | 'trashed';
}

interface TasksState {
    tasks: Task[];
}

// Функция для загрузки данных из LocalStorage
const loadFromLocalStorage = (): Task[] => {
    try {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
        console.error('Ошибка загрузки данных из LocalStorage:', error);
        return [];
    }
};

// Функция для сохранения данных в LocalStorage
const saveToLocalStorage = (tasks: Task[]) => {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.error('Ошибка сохранения данных в LocalStorage:', error);
    }
};

const initialState: TasksState = {
    tasks: loadFromLocalStorage(), // Загружаем начальное состояние из LocalStorage
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask: Task = {
                id: Date.now().toString(),
                text: action.payload,
                status: 'active',
            };
            state.tasks.push(newTask);
            saveToLocalStorage(state.tasks); // Сохраняем изменения
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            saveToLocalStorage(state.tasks); // Сохраняем изменения
        },
        clearTasks: (state) => {
            state.tasks = [];
            saveToLocalStorage(state.tasks); // Сохраняем изменения
        },
        completeTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.status = 'completed';
            saveToLocalStorage(state.tasks); // Сохраняем изменения
        },
        trashTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.status = 'trashed';
            saveToLocalStorage(state.tasks); // Сохраняем изменения
        },
        restoreTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.status = 'active';
            saveToLocalStorage(state.tasks); // Сохраняем изменения
        },
    },
});

export const { addTask, deleteTask, clearTasks, completeTask, trashTask, restoreTask } =
    tasksSlice.actions;
export default tasksSlice.reducer;