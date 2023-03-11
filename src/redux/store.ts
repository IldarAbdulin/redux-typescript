import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './slices/todo-slice';
import usersReducer from './slices/users-slice';

const reducers = combineReducers({
  todos: todoReducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
