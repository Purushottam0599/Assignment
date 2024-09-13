
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload;
            console.log("state from login slice---->",state)
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.accessToken = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
