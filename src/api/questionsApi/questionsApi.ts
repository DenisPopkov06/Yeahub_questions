import { baseApi } from "../baseApi";
import type {
  GetQuestionsParams,
  GetQuestionsQueryParams,
  QuestionsResponse,
} from "./models/questionsType";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsResponse, GetQuestionsParams>({
      query: (params) => {
        const queryParams: GetQuestionsQueryParams = {};

        if (params.skills && params.skills.length > 0) {
          queryParams.skills = params.skills.map((skill) => skill.toString());
        }

        if (params.specializations && params.specializations.length > 0) {
          queryParams.specializationId = params.specializations[0];
        }

        if (params.complexity && params.complexity.length > 0) {
          queryParams.complexity = params.complexity;
        }

        if (params.rate && params.rate.length > 0) {
          queryParams.rate = params.rate;
        }

        if (params.searchingValue && params.searchingValue.trim().length > 0) {
          queryParams.titleOrDescription = params.searchingValue;
        }

        if (params.page) {
          queryParams.page = params.page;
        }

        queryParams.skillFilterMode = 'ANY';

        return {
          url: "questions/public-questions",
          params: queryParams,
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
