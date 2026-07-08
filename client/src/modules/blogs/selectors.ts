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

export const fetchBlogById = createAsyncThunk(
    'blogs/fetchBlogById',
    async (blogId: string) => {
        const res = await fetch(`/api/blogs/${blogId}`, {
            credentials: 'include',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch blog');
        }

        return res.json();
    }
);