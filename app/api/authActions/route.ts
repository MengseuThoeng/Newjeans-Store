import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store'; // Import AppDispatch from your store file

interface AuthState {
  user: any; // Define your user type here
  isLoggedIn: boolean;
  accessToken: string | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  accessToken: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ user: any; accessToken: string }>) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.accessToken = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// Async action to handle login
export const login = (credentials: { email: string; password: string }) => async (dispatch: AppDispatch) => {
  try {
    // Simulated API call, replace with actual login logic
    const response = await fetch('your-api-url/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(loginSuccess({ user: data.user, accessToken: data.accessToken }));
      // Redirect or do any other action upon successful login
    } else {
      dispatch(loginFailure(data.error));
    }
  } catch (error) {
    dispatch(loginFailure('An error occurred'));
  }
};

export default authSlice.reducer;
