import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  status: "",
  error: "",
};

export const authAsync = createAsyncThunk(
  "auth/authAsync",
  async ({ login, password }) => {
    const response = await fetch(process.env.REACT_APP_SERVICE_SSO + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    localStorage.setItem("token", data.Token);
    return data;
  }
);

export const authRefresh = createAsyncThunk("auth/authRefresh", async () => {
  const localToken = localStorage.getItem("token");
  const response = await fetch(process.env.REACT_APP_SERVICE_SSO + "/refresh", {
    method: "GET",
    headers: {
      Authorization: localToken,
    },
  });

  if (!response.ok) {
    localStorage.removeItem("token");
    throw new Error("invalid data");
  }

  const data = await response.json();
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
    checkAuth: (state) => {
      state.token = localStorage.getItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authAsync.pending, (state) => {
        state.status = "loadingLogin";
      })
      .addCase(authAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "loginError";
      })
      .addCase(authAsync.fulfilled, (state, action) => {
        state.status = "loginOk";
        state.token = action.payload.Token;
      })
      .addCase(authRefresh.pending, (state) => {
        state.status = "loadingRefresh";
      })
      .addCase(authRefresh.rejected, (state) => {
        state.status = "tokenError";
      })
      .addCase(authRefresh.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.status = "refreshOk";
      });
  },
});

export const { logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
