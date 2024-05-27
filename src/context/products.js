import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request for all products with limit
    getProducts: build.query({
      query: (params) => ({
        url: "/products?limit=8",
        params,
      }),
      providesTags: ["Product"],
    }),

    // Get request for a single product by ID
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),

    // Get request for products by category
    getProductsByCategory: build.query({
      query: (category,) => ({
        url: `/products/category/${category}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useGetProductsByCategoryQuery } = productApi;
