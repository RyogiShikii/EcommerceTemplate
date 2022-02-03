import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import directoryReducer from './directorySlice';
import shopReducer from './shopSlice';

const store = configureStore({reducer:{
    cart: cartReducer.reducer,
    directory: directoryReducer.reducer,
    shop: shopReducer.reducer
}})

export default store;