import { clearFormValues } from "@modules/form/selectors";
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

export const submitBlog = (formValues: any, selectedImage: any) => async (dispatch: any) => {
    const uploadConfig = await fetch('/api/upload') as any;

    await fetch(uploadConfig?.data.url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'image/jpeg'
        },
        body: selectedImage
    })

    await fetch('/api/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            ...formValues,
            imageUrl: uploadConfig.data.key
        },
    });
    dispatch(clearFormValues());
}