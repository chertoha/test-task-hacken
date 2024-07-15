import { axiosBaseQuery } from "@/services/api";
import { createApi } from "@reduxjs/toolkit/query/react";

const codeApi = createApi({
  reducerPath: "code",

  baseQuery: axiosBaseQuery({ baseUrl: "" }),

  endpoints: (builder) => ({
    getCode: builder.query<string, void>({
      query: () => ({
        url: "/public/App.tsx",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCodeQuery } = codeApi;
export default codeApi;
