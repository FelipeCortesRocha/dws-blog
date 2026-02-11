import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post } from '../types'

// Define a service using a base URL and expected endpoints
export const dwsApi = createApi({
  reducerPath: 'dwsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_DWS_API_BASE_URL }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
        query: () => "posts",
      }),
  }),
})

export const { useGetPostsQuery } = dwsApi