import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (builder) => ({
        getShopData: builder.query({
            query: () => ''
        }),
        addNewItem: builder.mutation({
            query: (item) => ({
                url:'/items',
                method:'POST',
                body: item,
            })
        })
    })
})