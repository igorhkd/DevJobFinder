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

export const getIssues = async (url: string): Promise<IssuesData[]> => {
  const response: AxiosResponse<IssuesData[]> = await api.get(
    `${url}/vagas/issues`
  );

  return response.data;
};

export const getIssuesById = async (
  url: string,
  id: string
): Promise<IssuesData> => {
  const response: AxiosResponse<IssuesData> = await api.get(
    `${url}/vagas/issues/${id}`
  );

  return response.data;
};
