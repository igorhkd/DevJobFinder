import { ReactNode } from "react";
import { LinkButton } from "../LinkButton";
import { IoArrowBack } from "react-icons/io5";

type VacanciesPageProps = {
  children: ReactNode;
  pageTitle?: string;
};

export const VacanciesPage = ({ children, pageTitle }: VacanciesPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto flex flex-col mt-10 mb-4 gap-2 px-2 sm:px-0">
        <LinkButton>
          <IoArrowBack />
          Voltar
        </LinkButton>
        <p className="text-3xl font-bold text-secondary mb-10">{pageTitle}</p>
        {children}
      </div>
    </div>
  );
};
