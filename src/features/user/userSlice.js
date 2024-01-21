import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: {},
  eventsData: {},
  userGetStatus: "",
  userEventsGetStatus: "",
  error: "",
};

export const userGet = createAsyncThunk("user/userGet", async () => {
  const localToken = localStorage.getItem("token");
  const response = await fetch(
    process.env.REACT_APP_SERVICE_PERSONAL + "/info",
    {
      method: "GET",
      headers: {
        Authorization: localToken,
      },
    }
  );

  if (!response.ok) {
    throw new Error("invalid data");
  }

  const data = await response.json();
  return data;
});

export const userEventsGet = createAsyncThunk(
  "user/userEventsGet",
  async () => {
    const localToken = localStorage.getItem("token");
    const response = await fetch(
      process.env.REACT_APP_SERVICE_EVENTCALENDAR + "/user/events",
      {
        method: "GET",
        headers: {
          Authorization: localToken,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }

    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userGet.pending, (state) => {
        state.userGetStatus = "loading";
      })
      .addCase(userGet.rejected, (state) => {
        state.userGetStatus = "error";
      })
      .addCase(userGet.fulfilled, (state, action) => {
        state.userGetStatus = "ok";
        state.userData = action.payload;
      })
      .addCase(userEventsGet.rejected, (state, action) => {
        state.error = action.error.message;
        state.userEventsGetStatus = "error";
      })
      .addCase(userEventsGet.fulfilled, (state, action) => {
        state.userEventsGetStatus = "ok";
        state.eventsData = action.payload;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
