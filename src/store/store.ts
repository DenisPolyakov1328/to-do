import { configureStore } from "@reduxjs/toolkit"; // импортируем функцию ConStore из redaxToolkit
import authReducer from './slices/authSlice'
import tasksReducer from './slices/tasksSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>; //
export type AppDispatch = typeof store.dispatch; //
export default store

