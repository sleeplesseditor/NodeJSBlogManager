import { createSlice } from "@reduxjs/toolkit";
import { clearFormValues, setFormValues } from '@modules/form/selectors';

export const formSlice = createSlice({
    name: 'forms',
    initialState: {
        formValues: {
            values: {} as Record<string, any>,
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setFormValues.fulfilled, (state, action) => {
                return { ...state, formValues: { values: action.payload } };
            })
            .addCase(clearFormValues.fulfilled, (state, action) => {
                return { ...state, formValues: { values: action.payload } };
            });
    }
});