import { MiniCard } from "../components/MiniCard";
import { VacanciesPage } from "../components/VacanciesPage";
import { useFetch } from "../hooks/useFetch";
import { getFrontEndIssues } from "../service/issuesData";
import { formatDate } from "../utils";

export const FrontEndPage = () => {
  const { data: issues } = useFetch(getFrontEndIssues);

  return (
    <VacanciesPage pageTitle="Front-End">
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
