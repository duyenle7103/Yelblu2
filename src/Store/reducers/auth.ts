import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    accessToken: string | null;
    refreshToken: string | null;
    user: unknown;
    isAuthenticated: boolean;
};

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    user: null,
    isAuthenticated: false,
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (
            state,
            action: PayloadAction<{ accessToken: string; refreshToken: string; user: unknown }>
        ) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        reSignAccessToken: (
            state,
            action: PayloadAction<{ accessToken: string }>
        ) => {
            state.accessToken = action.payload.accessToken;
        },
        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout, reSignAccessToken } = slice.actions;
export const authReducer = slice.reducer;
