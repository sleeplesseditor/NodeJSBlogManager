import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogUser = createAsyncThunk(
    'auth/getBlogUser',
    async () => {
        const res = await fetch('/api/current_user', {
            credentials: 'include',
        });

        if (!res.ok) {
            return null;
        }

        return res.json();
    }
);