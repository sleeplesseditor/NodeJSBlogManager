import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { authSlice } from "@modules/auth/slice";
import { blogsSlice } from "@modules/blogs/slice";
import { formSlice } from "@modules/form/slice";

function createStore() {
    const store = configureStore({
        reducer: {
            auth: authSlice.reducer,
            blogs: blogsSlice.reducer,
            forms: formSlice.reducer
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

export const store = getStore();

export default getStore;

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;