export type GetSpecializationsParams = {
  limit?: number;
};

export type Specialization = {
  id: number;
  title: string;
};

export type SpecializationsResponse = {
  data: Specialization[];
  total: number;
  page: number;
  limit: number;
};
