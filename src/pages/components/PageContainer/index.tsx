import { ReactNode } from "react";
import { IoArrowBack } from "react-icons/io5";
import { LinkButton } from "../../../components/LinkButton";

type VacanciesPageProps = {
  children: ReactNode;
  pageTitle?: string;
};

export const PageContainer = ({ children, pageTitle }: VacanciesPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto flex flex-col mt-10 mb-4 gap-2 px-2 sm:px-0">
        <LinkButton to="/">
          <IoArrowBack />
          Voltar
        </LinkButton>
        <p className="text-3xl font-bold text-secondary mb-10">{pageTitle}</p>
        {children}
      </div>
    </div>
  );
};
