import { useLocation } from "react-router-dom";
import { MiniCard } from "../components/MiniCard";
import { VacanciesPage } from "../components/VacanciesPage";
import { useFetch } from "../hooks/useFetch";
import { formatDate } from "../utils";
import { useCallback } from "react";
import { getIssues } from "../service/issuesData";

export const BackEndPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const fetchFunction = useCallback(() => getIssues(pathname), [pathname]);
  const { data: issues } = useFetch(fetchFunction);

  return (
    <VacanciesPage pageTitle="Back-End">
      {issues?.map((issue) => (
        <MiniCard
          key={issue.id}
          title={issue.title}
          badges={issue.labels}
          subtitle={formatDate(issue.created_at)}
          linkUrl={`/backend-br/${issue.number}`}
        />
      ))}
    </VacanciesPage>
  );
};
