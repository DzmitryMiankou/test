import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./Interceptor";

const newHeaders = {
    headers: {
        Accept: "application/json",
    },
};

export const apiSlice = createApi({
    reducerPath: "API",
    baseQuery: baseQueryWithReauth,
    refetchOnFocus: true,
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getParams: builder.query({
            query: (name) => ({
                url: `/api/${name.href}`,
                params: { name: name.params },
            }),
        }),
        getImgPanel: builder.query({
            query: (name) => ({
                url: `/api/${name.href}`,
                params: { name: name.params },
            }),
            providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
        }),
        uploadImages: builder.mutation({
            query({ body, params }) {
                return {
                    ...newHeaders,
                    url: `/api/upload`,
                    method: "POST",
                    params: { name: params },
                    body,
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
        }),
        updateContent: builder.mutation({
            query(body) {
                return {
                    url: `/api/updata`,
                    method: "PUT",
                    body,
                };
            },
        }),
        deleteImages: builder.mutation({
            query({ body, params }) {
                return {
                    ...newHeaders,
                    url: `/api/deleteFile`,
                    method: "DELETE",
                    params: { name: params },
                    body,
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
        }),
        postQuery: builder.mutation({
            query(body) {
                return {
                    url: `/api/auth`,
                    method: "POST",
                    body,
                };
            },
        }),
        postLogin: builder.mutation({
            query: (body) => ({
                url: `/api/login`,
                method: "POST",
                body,
                credentials: "include",
            }),
        }),
        delete: builder.mutation({
            query: (body) => ({
                url: `/api/logoutUsers`,
                method: "DELETE",
                body,
            }),
        }),
    }),
});

export const {
    useDeleteImagesMutation,
    useGetImgPanelQuery,
    useUploadImagesMutation,
    usePostQueryMutation,
    usePostLoginMutation,
    useGetParamsQuery,
    useDeleteMutation,
    useUpdateContentMutation,
} = apiSlice;
