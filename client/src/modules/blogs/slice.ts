import { createSlice } from "@reduxjs/toolkit";
import mapKeys from 'lodash/mapKeys';
import { fetchBlogList } from '@modules/blogs/selectors';

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogList.fulfilled, (state, action) => {
                return { ...state, ...mapKeys(action.payload, '_id') };
            })
    }
});

export default blogsSlice.reducer;