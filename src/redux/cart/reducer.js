import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { itemsInCart: [] },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
      // console.log(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (hardItem) => hardItem.id !== action.payload
      );
    },
  },
});
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
