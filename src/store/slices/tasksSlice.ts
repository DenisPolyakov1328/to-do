import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorageUtils';
import { Task } from '../../types/taskTypes';

interface TasksState {
    tasks: Task[];
}

const LOCAL_STORAGE_KEY = 'tasks';

// Инициализация состояния из LocalStorage
const initialState: TasksState = {
    tasks: loadFromLocalStorage<Task[]>(LOCAL_STORAGE_KEY) || [],
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
            saveToLocalStorage(LOCAL_STORAGE_KEY, state.tasks);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            saveToLocalStorage(LOCAL_STORAGE_KEY, state.tasks);
        },
        clearTasks: (state) => {
            state.tasks = [];
            saveToLocalStorage(LOCAL_STORAGE_KEY, state.tasks);
        },
        updateTaskStatus: (state, action: PayloadAction<{ id: string; status: Task['status'] }>) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.status = action.payload.status;
                saveToLocalStorage(LOCAL_STORAGE_KEY, state.tasks);
            }
        },
    },
});

export const { addTask, deleteTask, clearTasks, updateTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;