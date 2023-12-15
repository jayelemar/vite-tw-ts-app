import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthProps } from "../../../types/types"

const storedName = JSON.parse(localStorage.getItem("name") as string);
const name: string | null = storedName;

const initialState: AuthProps = {
    name: name ?? "",
    email: "",
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
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
            }
        },
    }
});

export const { SET_NAME, SET_USER } = authSlice.actions;
export const selectName = (state: RootState) => state.auth.name;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
