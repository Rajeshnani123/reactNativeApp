import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setAccessToken, clearAccessToken, getAccessToken, getRoleType, setRoleType } from './../../utils';
const initialState = {
  accessToken: null,
  roleType: null, // 1=USER 2=VENDOR
  isLoading: true,
};

export const authIsLogedIn = createAsyncThunk('authIsLogedIn', async () => {
  const accessToken = await getAccessToken();
  const roleType = await getRoleType();
  const tokens = { accessToken, roleType };
  return tokens;
});

export const login = createAsyncThunk('login', async tokens => {
  return tokens;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.accessToken = null;
      state.roleType = null;
      clearAccessToken();
    },
  },
  extraReducers: {
    [authIsLogedIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [authIsLogedIn.fulfilled]: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.roleType = action.payload.roleType;
      state.isLoading = false;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      setAccessToken(action.payload.accessToken);
      setRoleType(action.payload.roleType);
      state.accessToken = action.payload.accessToken;
      state.roleType = action.payload.roleType;
      state.isLoading = false;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
