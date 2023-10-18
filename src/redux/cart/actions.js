import CartActionTypes from "./action-types";

export const addProductToCard = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
});
export const removeProductfromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
})

export const increaseProductQuantity= (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const decreaseProductQuantity= (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
})