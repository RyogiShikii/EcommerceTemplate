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
                    imageUrl:newItem.imageUrl,
                    quantity: 1,
                    totalAmount: newItem.price,
                    title: newItem.title
                })
            }
        },
        decreaseItem(state,action){
            const targetId = action.payload;
            const existingItem = state.items.find(item => item.id === targetId);

            state.totalQuantity--;

            if(existingItem && existingItem.quantity>1){
                existingItem.quantity--;
                existingItem.totalAmount = existingItem.totalAmount - existingItem.price;
            }else{
                state.items = state.items.filter(item => item.id !== targetId);
            }
        },
        removeAllItems(state,action){
            const targetId = action.payload;
            const existingItem = state.items.find(item => item.id === targetId);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.items = state.items.filter(item => item.id !== targetId);
        }
    }
})

export const {toggleCart, addItem, decreaseItem, removeAllItems} = cartSlice.actions;
export default cartSlice;