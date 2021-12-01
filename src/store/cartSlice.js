import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
        isShowCart: false,
    },
    reducers: {

    }
})

export default cartSlice;