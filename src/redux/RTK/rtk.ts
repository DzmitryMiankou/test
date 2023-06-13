import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./Interceptor";

const newHeaders = {
  headers: {
    "Content-type": `audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3`,
    "Content-Transfer-Encoding": "binary",
    "Content-Disposition": `filename="record.mp3"`,
    Authorization: "Bearer testtoken",
  },
};

export const apiSlice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getDate: builder.query({
      query: (path: string) => ({
        url: `${path}`,
        method: "POST",
      }),
    }),
    getAudio: builder.query({
      query: (path: string) => ({
        ...newHeaders,
        url: `${path}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetDateQuery, useGetAudioQuery } = apiSlice;
