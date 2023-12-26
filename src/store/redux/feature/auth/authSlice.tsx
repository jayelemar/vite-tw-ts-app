import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { AuthProps } from "../../../../types/types";

const storedName = JSON.parse(localStorage.getItem("name") as string);
const name: string | null = storedName;

const initialState: AuthProps = {
  name: name ?? "",
  email: "",
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },

    SET_NAME(state, action) {
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
    },

    SET_USER(state, action: PayloadAction<AuthProps>) {
      const profile = action.payload;
      state = {
        ...state,
        name: profile.name,
        email: profile.email,
        isLoggedIn: true,
      };
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;
export const selectName = (state: RootState) => state.auth.name;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
