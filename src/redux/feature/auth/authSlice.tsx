import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserData {
    isLoggedIn: boolean;
    userName: string | null;
    email: string | null;
    userID: string | null;
}

const initialState: UserData = {
    isLoggedIn: false,
    email: null,
    userName: null,
    userID: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action: PayloadAction<UserData>) => {
            const userData = action.payload;
            state.isLoggedIn = true;
            state.userName = userData.userName;
            state.email = userData.email;
            state.userID = userData.userID;
        },
        REMOVE_ACTIVE_USER: state => {
            state.isLoggedIn = false;
            state.userName = null;
            state.email = null;
            state.userID = null;
        }
    }
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectUserName = (state: RootState) => state.auth.userName;
export const selectUserID = (state: RootState) => state.auth.userID;
export default authSlice.reducer;
