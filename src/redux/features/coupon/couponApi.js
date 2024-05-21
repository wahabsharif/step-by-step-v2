import { apiSlice } from "@/redux/api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get offer coupon
    getOfferCoupons: builder.query({
      query: () => `https://sbs-server-mu.vercel.app/api/coupon`,
      providesTags: ["Coupon"],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetOfferCouponsQuery } = authApi;
