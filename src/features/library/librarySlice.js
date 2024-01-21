import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  libraryData: {},
  filtersData: {},
  currentFilters: { subjects: [], authors: [], types: [], status: [] },
  currentBook: {},
  status: "",
};

export const libraryGet = createAsyncThunk("library/libraryGet", async () => {
  const response = await fetch(
    process.env.REACT_APP_SERVICE_LIBRARY + "/library",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("invalid data");
  }

  const data = await response.json();
  return data;
});

export const filterGet = createAsyncThunk("library/filterGet", async () => {
  const localToken = localStorage.getItem("token");
  const response = await fetch(
    process.env.REACT_APP_SERVICE_LIBRARY + "/library/dictionaries",
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

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    setCurrentFilters: (state, action) => {
      let from = action.payload.from;
      let filter = action.payload.filter;
      let data = action.payload.data;

      let stateData = state.currentFilters[filter];

      if (from == "subjectFilter") {
        state.currentFilters[filter] = data;
      } else {
        let index = stateData.indexOf(data);
        if (index > -1) {
          stateData.splice(index, 1);
        } else {
          stateData.push(data);
        }
      }
    },
    clearCurrentFilters: (state, action) => {
      let filter = action.payload.filter;
      let all = action.payload.all;
      if (all) {
        for (var item in state.currentFilters) {
          state.currentFilters[item] = [];
        }
      } else {
        state.currentFilters[filter] = [];
      }
    },
    setCurrentBook: (state, action) => {
      let locationSelect = action.payload;
      let Id = locationSelect.pathname.slice(9);
      let book = state.libraryData?.entities?.filter((item) => item.Id == Id);
      state.currentBook = book[0];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(libraryGet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(libraryGet.rejected, (state) => {
        state.status = "error";
      })
      .addCase(libraryGet.fulfilled, (state, action) => {
        state.status = "ok";
        state.libraryData = action.payload;
      })
      .addCase(filterGet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterGet.rejected, (state) => {
        state.status = "error";
      })
      .addCase(filterGet.fulfilled, (state, action) => {
        state.filtersData = action.payload;
      });
  },
});

export const { setCurrentFilters, clearCurrentFilters, setCurrentBook } =
  librarySlice.actions;

export default librarySlice.reducer;
