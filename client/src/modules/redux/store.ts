import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@modules/auth/slice";
import { blogsSlice } from "@modules/blogs/slice";

function createStore() {
    const store = configureStore({
        reducer: {
            auth: authSlice.reducer,
            blogs: blogsSlice.reducer,
        },
    });

    return store;
};

let storeInstance: ReturnType<typeof createStore> | null = null;

export const getStore = () => {
    if(!storeInstance) {
        storeInstance = createStore()
    }
    return storeInstance
};

export default getStore;

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];