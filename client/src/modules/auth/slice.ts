import { createSlice } from "@reduxjs/toolkit";
import { getBlogUser } from '@modules/auth/selectors';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlogUser.fulfilled, (state, action) => {
                state.user = action.payload ?? null;
            });
    }
});

// export const { fetchUser } = authSlice.actions;
export default authSlice.reducer;