import { baseApi } from "../baseApi";
import type { GetSkillsParams, SkillsResponse } from "./models/skillsType";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, GetSkillsParams>({
      query: ({ specializations, limit }) => ({
        url: "/skills",
        params: { specializations, limit },
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
