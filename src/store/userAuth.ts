import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper'

interface userAuth {
    user: string
}

const initialState = {
    user: 'jack'
} as userAuth

export const userAuth = createSlice({
    name: 'userAuth',
    initialState,

    reducers: {
        logUser: (state) => {
            console.log(state.user);
        }
    }
})