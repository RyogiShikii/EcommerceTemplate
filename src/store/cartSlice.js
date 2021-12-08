import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
        isCartShow: false,
        totalQuantity: 0
    },
    reducers: {
        toggleCart(state){
            state.isCartShow = !state.isCartShow;
        },
        addItem(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalAmount = existingItem.totalAmount + newItem.price;
            }else{
                state.items.push({
                    id: newItem.id,
                    price:newItem.price,
                    quantity: 1,
                    totalAmount: newItem.price,
                    title: newItem.title
                })
            }
        }
    }
})

export const {toggleCart, addItem} = cartSlice.actions;
export default cartSlice;