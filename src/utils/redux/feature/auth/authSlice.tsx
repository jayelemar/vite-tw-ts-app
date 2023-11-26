import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface UserData {
    isLoggedIn: boolean;
    name: string | null;
    user: User;
}

export interface User {
    name: string;
    email: string;
    phone: string;
    bio: string;
    photo: string;
}

const storedName = JSON.parse(localStorage.getItem("name") as string);
const name: string | null = storedName;

const initialState: UserData = {
    isLoggedIn: false,
    name: name,
    user: {
        name: "",
        email: "",
        phone: "",
        bio: "",
        photo: ""
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        SET_NAME(state, action) {
            localStorage.setItem("name", JSON.stringify(action.payload));
            state.name = action.payload;
        },

        SET_USER(state, action: PayloadAction<User>) {
            const profile = action.payload;
            return {
                ...state,
                user: {
                    ...state.user,
                    name: profile.name,
                    email: profile.email,
                    phone: profile.phone,
                    bio: profile.bio,
                    photo: profile.photo
                }
            };
        }
    }
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectName = (state: RootState) => state.auth.name;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
