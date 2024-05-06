import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType } from "@/lib/definitions";
import type { RootState } from "@/redux/store";

interface CartState {
  products: CartProductType[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity++;
        state.totalQuantity++;
        state.totalPrice += action.payload.price;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.totalQuantity++;
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.products = state.products.filter(
            (product) => product.id !== productId
          );
        } else {
          existingProduct.quantity--;
        }
        state.totalQuantity--;
        state.totalPrice -= existingProduct.price;
      }
    },
	setProductsItem: (state, action: PayloadAction<CartProductType[]>) => {
		state.products = action.payload;
	  },
  }
});

export const { addToCart, removeFromCart, setProductsItem } =
  cartSlice.actions;
export default cartSlice.reducer;

export const selectProducts = (state: RootState) => state.cart.products;
export const selectTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
