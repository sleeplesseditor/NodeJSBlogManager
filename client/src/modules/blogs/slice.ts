import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogList, fetchBlogById } from '@modules/blogs/selectors';

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogList: [] as Record<string, any>,
        selectedBlog: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogList.fulfilled, (state, action) => {
                return { ...state, blogList: action.payload  };
            })
            .addCase(fetchBlogById.fulfilled, (state, action) => {
                return { ...state, selectedBlog: action.payload  };
            })
    }
});

export default blogsSlice.reducer;