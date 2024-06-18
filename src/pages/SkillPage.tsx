import { useLocation } from "react-router-dom";
import { MiniCard } from "../components/MiniCard";
import { VacanciesPage } from "../components/VacanciesPage";
import { useFetch } from "../hooks/useFetch";
import { getIssues } from "../service/issuesData";
import { formatDate } from "../utils";
import { useCallback } from "react";

type SkillPageProps = {
  title?: string;
  linkUrl: string;
};

export const SKillPage = ({ title = "", linkUrl }: SkillPageProps) => {
  const location = useLocation();
  const { pathname } = location;
  const fetchFunction = useCallback(() => getIssues(pathname), [pathname]);
  const { data: issues } = useFetch(fetchFunction);

  return (
    <VacanciesPage pageTitle={title}>
      {issues?.map((issue) => (
        <MiniCard
          key={issue.id}
          title={issue.title}
          badges={issue.labels}
          subtitle={formatDate(issue.created_at)}
          linkUrl={`/${linkUrl}/${issue.number}`}
        />
      ))}
    </VacanciesPage>
  );
};
