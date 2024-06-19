import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `https://sbs-server-v2.vercel.app/api/brand/active`,
    }),
  }),
});

export const { useGetActiveBrandsQuery } = brandApi;
