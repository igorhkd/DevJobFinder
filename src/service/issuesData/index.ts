import { AxiosResponse } from "axios";
import { api } from "../api";

type IssuesData = {
  id: number;
  title: string;
  created_at: string;
  number: number;
  body: string;
  html_url: string;
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

export const getFrontEndIssuesById = async (
  id: string
): Promise<IssuesData> => {
  const response: AxiosResponse<IssuesData> = await api.get(
    `frontendbr/vagas/issues/${id}`
  );

  return response.data;
};

export const getBackEndIssues = async (): Promise<IssuesData[]> => {
  const response: AxiosResponse<IssuesData[]> = await api.get(
    "backend-br/vagas/issues"
  );

  return response.data;
};

export const getBackEndIssuesById = async (id: string): Promise<IssuesData> => {
  const response: AxiosResponse<IssuesData> = await api.get(
    `backend-br/vagas/issues/${id}`
  );

  return response.data;
};
