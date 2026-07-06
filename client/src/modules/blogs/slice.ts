import { createSelector, createSlice } from "@reduxjs/toolkit";
import mapKeys from 'lodash/mapKeys';
import type { RootState } from "@modules/redux/store";

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {},
    reducers: {
        fetchBlog: (state, action) => {
            const blog = action.payload;
            return { ...state, [blog._id]: blog };
        },
        fetchBlogs: (state, action) => {
            return { ...state, ...mapKeys(action.payload, '_id') };
        },
    },
});

export const { fetchBlog, fetchBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;