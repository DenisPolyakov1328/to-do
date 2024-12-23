import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
}

interface LoginPayload {
    username: string;
    password: string;
}

const initialState: AuthState = {
    isAuthenticated: !!localStorage.getItem('isAuthenticated'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<LoginPayload>) => {
            const { username, password } = action.payload;
            if (username === 'admin' && password === 'admin') {
                state.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', 'true');
            } else {
                console.error('Неверное имя пользователя или пароль'); // Обработка ошибок
            }
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            localStorage.removeItem('isAuthenticated');
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
