export type GetQuestionsParams = {
  skills?: number[];
  specializations?: number[];
  rate?: number[];
  complexity?: number[];
  searchingValue?: string;
  page?: number;
};

export type GetQuestionsQueryParams = {
  skills?: string[];
  specializationId?: number;
  rate?: number[];
  complexity?: number[];
  titleOrDescription?: string;
  skillFilterMode?: string;
  page?: number;
};

export type QuestionsResponse = {
  total: number;
  page: number;
  limit: number;
  data: Question[];
};

export type Question = {
  id: number;
  title: string;
  imageSrc: string | null;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  status?: string
};
