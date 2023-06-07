import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.skilla.ru/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer=testtoken",
    },
    credentials: "include",
});

export const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);
    return result;
};
