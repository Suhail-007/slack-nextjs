import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userAuth from './userAuth';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const combinedReducers = combineReducers({
  auth: userAuth.reducer,
});

const persistedReducers = persistReducer(persistConfig, combinedReducers);

const store = () =>
  configureStore({
    reducer: persistedReducers,
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RTCIceConnectionState,
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
