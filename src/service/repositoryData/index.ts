import { AxiosResponse } from "axios";
import { api } from "../api";

type RepositoryData = {
  description: string;
  organization: {
    login: string;
    avatar_url: string;
  };
};

export const getFrontEndData = async (): Promise<RepositoryData> => {
  const response: AxiosResponse<RepositoryData> = await api.get(
    "frontendbr/vagas"
  );
  return response.data;
};

export const getBackEndData = async (): Promise<RepositoryData> => {
  const response: AxiosResponse<RepositoryData> = await api.get(
    "backend-br/vagas"
  );
  return response.data;
};
