import { AxiosResponse } from "axios";
import { api } from "../api";

type IssuesData = {
  id: number;
  title: string;
  created_at: string;
  labels: {
    id: number;
    color: string;
    name: string;
  }[];
};

export const getFrontEndIssues = async (): Promise<IssuesData[]> => {
  const response: AxiosResponse<IssuesData[]> = await api.get(
    "frontendbr/vagas/issues"
  );

  return response.data;
};

export const getBackEndIssues = async (): Promise<IssuesData[]> => {
  const response: AxiosResponse<IssuesData[]> = await api.get(
    "backend-br/vagas/issues"
  );

  return response.data;
};
