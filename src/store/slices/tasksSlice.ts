import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: string;
    text: string;
    status: 'active' | 'completed' | 'trashed';
}

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push({
                id: Date.now().toString(),
                text: action.payload,
                status: 'active',
            });
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        clearTasks: (state) => {
            // state.tasks = state.tasks.filter((task) => task.status !== 'trashed'); //удалять только из корзины
            state.tasks = []
        },
        completeTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.status = 'completed';
        },
        trashTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.status = 'trashed';
        },
        restoreTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.status = 'active';
        },
    },
});

export const { addTask, deleteTask, clearTasks, completeTask, trashTask, restoreTask } =
    tasksSlice.actions;
export default tasksSlice.reducer;