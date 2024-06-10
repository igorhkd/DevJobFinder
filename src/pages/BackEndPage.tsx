import { MiniCard } from "../components/MiniCard";
import { VacanciesPage } from "../components/VacanciesPage";
import { useFetch } from "../hooks/useFetch";
import { getBackEndIssues } from "../service/issuesData";
import { formatDate } from "../utils";

export const BackEndPage = () => {
  const { data: issues } = useFetch(getBackEndIssues);

  return (
    <VacanciesPage pageTitle="Back-End">
      {issues?.map((issue) => (
        <MiniCard
          key={issue.id}
          title={issue.title}
          badges={issue.labels}
          subtitle={formatDate(issue.created_at)}
        />
      ))}
    </VacanciesPage>
  );
};
