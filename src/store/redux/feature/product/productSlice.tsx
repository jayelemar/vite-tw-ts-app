import { createSlice } from "@reduxjs/toolkit";

interface ProductStateProps{
    product: null | string;
    message: string;
}

const initialState: ProductStateProps = {
	product: null,
	message: "",
};


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
		CALC_STORE_VALUE() {
		console.log("store value");
    },
  }
});

export const { CALC_STORE_VALUE } = productSlice.actions;

export default productSlice.reducer;
