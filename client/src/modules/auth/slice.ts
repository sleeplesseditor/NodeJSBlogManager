import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@modules/redux/store";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false
    },
    reducers: {
        fetchUser: (state, action) => {
            return action.payload;
        }
    },
});

export const { fetchUser } = authSlice.actions;
export default authSlice.reducer;