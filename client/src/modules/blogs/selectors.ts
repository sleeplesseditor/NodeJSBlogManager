import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogList = createAsyncThunk(
    'blogs/fetchBlogList',
    async () => {
        const res = await fetch('/api/blogs', {
            credentials: 'include',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch blogs');
        }

        return res.json();
    }
);