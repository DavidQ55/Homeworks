import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['auth/loginWithEmail/fulfilled', 'auth/loginWithGoogle/fulfilled', 'auth/logout/fulfilled'],
            },
        }),
});
