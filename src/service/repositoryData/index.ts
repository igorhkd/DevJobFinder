import { AxiosResponse } from "axios";
import { api } from "../api";

export type RepositoryData = {
  id: number;
  description: string;
  organization: {
    login: string;
    avatar_url: string;
  };
};

export const getRepositoryData = async (
  url: string
): Promise<RepositoryData> => {
  const response: AxiosResponse<RepositoryData> = await api.get(`${url}/vagas`);
  return response.data;
};
