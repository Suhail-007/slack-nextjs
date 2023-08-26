import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

import { userAuth } from "./userAuth";

const store = () => configureStore({
    reducer: {
        auth: userAuth.reducer,
    },
    devTools: true,
});

export type AppStore = ReturnType<typeof store>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RTCIceConnectionState, unknown, Action>;
export type RootState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(store);
type AppDispatch = AppStore['dispatch'];

//Custom Hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;