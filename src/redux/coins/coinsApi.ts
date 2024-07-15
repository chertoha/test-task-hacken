import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { CoinsWithMarket, Currency, MarketOrder } from "@/types/entities";

type CoinsQueryParams = {
  vs_currency: Currency;
  order: MarketOrder;
  per_page: number;
  page: number;
  sparkline: boolean;
};

const coinsApi = createApi({
  reducerPath: "coins",

  baseQuery: axiosBaseQuery(),

  endpoints: (builder) => ({
    getCoins: builder.query<CoinsWithMarket[], CoinsQueryParams>({
      query: (params) => ({
        url: "/coins/markets",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
export default coinsApi;
