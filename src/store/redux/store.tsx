import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/authSlice";
import productReducer from "./feature/product/productSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
