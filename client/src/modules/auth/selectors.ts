import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";


// export const getBlogUser = () => createSelector({

// });

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');

//   dispatch({ type: FETCH_USER, payload: res.data });
// };

export const getBlogUser = async () => {
    const res = await fetch('/api/current_user');
    console.log('getBlogUser res:', res.json());
    return res.json();
}