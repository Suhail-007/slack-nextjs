import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userAuth from './userAuth';

const persistConfig = {
  key: 'root',
  version: 2,
  storage,
};

const reducers = persistCombineReducers(persistConfig, {
    auth: userAuth.reducer
});

const store = () =>
  configureStore({
    reducer: reducers,
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export type RootState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(store);
type AppDispatch = AppStore['dispatch'];

//Custom Hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
