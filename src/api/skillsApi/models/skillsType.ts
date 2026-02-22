export type GetSkillsParams = {
  specializations?: number[];
  limit?: number;
};

export type SkillsResponse = {
  data: Skill[];
  total: number;
  page: number;
  limit: number;
};

export type Skill = {
  id: number;
  title: string;
  imageSrc: string | null;
};

export type GetSkillsQueryParams = {
  specializations?: number[];
  limit?: number;
};
