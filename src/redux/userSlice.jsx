import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react';

const initialState = {
    users: [],
    loading: false
}

// Not: Bu fonksiyonu bileşenlerde kullanabilmek için başına 'export' eklemen gerekebilir.
export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //Http isteği olmaz ise kullanılır !
    },
    extraReducers: (builder) => {
        // Http isteği olur ise kullanılır !
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            // action response'den dönen değer
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer