import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productisAlreadyinCart = state.products.some(
        //verificar se o prod ja esta no carrinho
        (product) => product.id === action.payload.id
      );
      if (productisAlreadyinCart) {
        //se estiver no carrinho, aumentar a qtd em 1
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    increaseProductQuantity: (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )      
    },
    decreaseProductQuantity: (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ).filter(product => product.quantity > 0)
    },
    removeProduct: (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        )

    },
  },
});

export const { addProduct, increaseProductQuantity, decreaseProductQuantity, removeProduct } = cartSlice.actions

export default cartSlice.reducer;