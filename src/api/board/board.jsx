import { createApi } from "@reduxjs/toolkit/query/react";
import { Api } from "../index";
import { URL } from "store/urls";

export const BoardApi = createApi({
    reducerPath: "BoardApi",
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ["Mains"],
    endpoints: (build) => ({
        getSiteInfo: build.query({
            query: () => `${URL.SITE_INFO}`,
            providesTags: ["SITE_INFO"],
        }),
    }),
});

export const { useGetSiteInfoQuery } = BoardApi;
