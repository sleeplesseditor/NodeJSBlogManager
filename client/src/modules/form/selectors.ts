import { createAsyncThunk } from "@reduxjs/toolkit";

export const setFormValues = createAsyncThunk(
    'forms/setFormValues',
    async (values: Record<string, any>) => {
        return values;
    }
);

export const clearFormValues = createAsyncThunk(
    'forms/clearFormValues',
    async () => {
        return {};
    }
);
