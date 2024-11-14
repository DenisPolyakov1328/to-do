import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: !!localStorage.getItem('isAuthenticated'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<{ username: string; password: string }>) => {
            const { username, password } = action.payload;
            if (username === 'admin' && password === 'admin') {
                state.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', 'true');
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
