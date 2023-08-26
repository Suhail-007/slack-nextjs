import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface userAuth {
    user: string;
}

const initialState = {
    user: 'jack',
} as userAuth;

const userAuth = createSlice({
    name: 'userAuth',
    initialState,

    reducers: {
        logUser: state => {
            console.log(state.user);
        },
    },

    //special reducer for hydrating the state, only for nextJS
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.userAuth
            }
        }
    }
});

export const { logUser } = userAuth.actions;

export default userAuth;
