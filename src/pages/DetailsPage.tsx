import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { MarkdownEditor } from "../components/MarkdownEditor";
import { getIssuesById } from "../service/issuesData";
import { formatDate } from "../utils";
import { LinkButton } from "../components/LinkButton";
import { IoArrowBack } from "react-icons/io5";
import { Loading } from "../components/Loading";

export const DetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];
  const fetchFunction = useCallback(() => getIssuesById(path, id!), [id, path]);
  const { data, isLoading } = useFetch(fetchFunction);

  if (isLoading) return <Loading />;

  return (
    <div className="p-8 min-h-screen sm:container mx-auto sm:p-0 sm:my-8">
      <div className="mb-2">
        <LinkButton to={`/${path}`}>
          <IoArrowBack />
          Voltar
        </LinkButton>
      </div>
      <div className="border-b-2 border-black mb-2 pb-2">
        <h1 className="font-bold text-2xl mb-2">{data?.title}</h1>
        <p className="font-medium mb-2 text-black opacity-85">
          {formatDate(data?.created_at)}
        </p>
        <a
          href={data?.html_url}
          className="text-link font-medium hover:opacity-70 duration-150"
        >
          Visualizar essa vaga no github
        </a>
      </div>
      <MarkdownEditor>{data?.body}</MarkdownEditor>
    </div>
  );
};
