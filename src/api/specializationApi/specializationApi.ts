import { baseApi } from "../baseApi";
import type { GetSpecializationsParams, SpecializationsResponse } from "./models/specializationsType";

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationsResponse, GetSpecializationsParams>({
      query: ({ limit }) => ({
        url: "/specializations",
        params: { limit },
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
