import { baseApi } from "../baseApi";
import type {
  GetSkillsParams,
  SkillsResponse,
  GetSkillsQueryParams,
} from "./models/skillsType";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, GetSkillsParams>({
      query: (params) => {
        const queryParams: GetSkillsQueryParams = {};

        if (
          params.specializations !== undefined &&
          params.specializations.length > 0
        ) {
          queryParams.specializations = params.specializations;
        }

        if (params.limit) {
          queryParams.limit = params.limit;
        }

        return {
          url: "/skills",
          params: queryParams,
        };
      },
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
