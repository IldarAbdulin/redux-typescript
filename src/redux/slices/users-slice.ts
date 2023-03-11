import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Todo = {
  id: string;
  name: string;
  username: string;
  email: string;
};

type TodoState = {
  list: Todo[];
  loading: boolean;
  error: string | null;
};

export const fetchUsers = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>('fetchUsers', async function (_, { rejectWithValue }) {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data = response.data;
  return data;
});

const initialState: TodoState = {
  list: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = `${action.error.message}`;
      });
  },
});

export default usersSlice.reducer;
