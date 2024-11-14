import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: string,
    text: string,
    completed: boolean
}

interface TasksState {
    tasks: Task[]
}

const initialState: TasksState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask: Task = {
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            }
            state.tasks.push(newTask)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        clearTasks: (state) => {
            state.tasks = []
        },
        toggleTaskStatus: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        }
    }
})

export const { addTask, deleteTask, clearTasks, toggleTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;