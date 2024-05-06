import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DJANGO_API_URL
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, { page: number; pageSize: number }>({
      query: ({ page = 1, pageSize = 10 }) =>
        `api/products/?page=${page}&page_size=${pageSize}`
    }),

    getProductById: builder.query<any, number>({
      query: (id) => `/products/${id}/`
    }),

    createProduct: builder.mutation<any,{ newProduct: object; accessToken: string }>({
      query: ({ newProduct, accessToken }) => ({
        url: "/api/products/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: newProduct
      })
    }),

    updateProduct: builder.mutation<any,{ id: number; updatedProduct: object; accessToken: string }>({
      query: ({ id, updatedProduct, accessToken }) => ({
        url: `/api/products/${id}/`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: updatedProduct
      })
    }),

    deleteProduct: builder.mutation<any, { id: number; accessToken: string }>({
      query: ({ id, accessToken }) => ({
        url: `/api/products/${id}/`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      })
    })
  })
});

export const {
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = ecommerceApi;
