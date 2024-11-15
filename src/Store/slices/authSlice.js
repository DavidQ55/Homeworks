import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.js";

export const loginWithEmail = createAsyncThunk(
    "auth/loginWithEmail",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginWithGoogle = createAsyncThunk(
    "auth/loginWithGoogle",
    async (_, { rejectWithValue }) => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            return {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.email,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await signOut(auth);
});

export const registerWithEmail = createAsyncThunk(
    "auth/registerWithEmail",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginWithEmail.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginWithEmail.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "succeeded";
            })
            .addCase(loginWithEmail.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })
            .addCase(loginWithGoogle.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginWithGoogle.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "succeeded";
            })
            .addCase(loginWithGoogle.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })
            .addCase(registerWithEmail.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(registerWithEmail.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "succeeded";
            })
            .addCase(registerWithEmail.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.status = "idle";
                state.error = null;
            });
    },
});

export default authSlice.reducer;
