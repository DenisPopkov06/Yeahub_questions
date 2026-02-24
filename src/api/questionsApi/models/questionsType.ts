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
  page?: number;
  titleOrDescription?: string;
  skillFilterMode?: string;
};

export type QuestionsResponse = {
  total: number;
  page: number;
  limit: number;
  data: Question[];
};

type QuestionSkill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
};

type CreatedBy = {
  username: string;
  id: string;
};

export type Question = {
  id: number;
  title: string;
  imageSrc: string | null;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  status?: string;
  keywords: string[];
  questionSkills: QuestionSkill[];
  createdBy: CreatedBy
  description: string
};

export type GetQuestionParams = {
  id?: string;
};
