import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromFirebase } from "../firebase/firebase.utils";

export const getShopData = createAsyncThunk('get/getShopData', async () => {
  const data =  await getDataFromFirebase();
  return data;
})

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        shop: {},
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getShopData.pending, (state, action) => {
        state.status = 'loading';
      });
      builder.addCase(getShopData.fulfilled, (state, action) => {
        state.status = 'success';
        state.shop = action.payload;
      });
      builder.addCase(getShopData.rejected, (state,action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

      /*
      [getShopData.fulfilled]: (state,action) => {
        state.shop = action.payload;
      }
      */
    }
});

export default shopSlice;