import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { MarkdownEditor } from "../components/MarkdownEditor";
import {
  getBackEndIssuesById,
  getFrontEndIssuesById,
} from "../service/issuesData";

export const DetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const fetchFunction = useCallback(
    () =>
      pathname.includes("frontend")
        ? getFrontEndIssuesById(id!)
        : getBackEndIssuesById(id!),
    [id, pathname]
  );
  const { data } = useFetch(fetchFunction);

  return (
    <div className="p-8 min-h-screen sm:container mx-auto sm:p-0 sm:my-8">
      <div className="border-b-2 border-black mb-2 pb-2">
        <h1 className="font-bold text-2xl mb-2">{data?.title}</h1>
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
