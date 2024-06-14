import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { siteDescription } from "../config";
import { getBackEndData, getFrontEndData } from "../service/repositoryData";

export const Home = () => {
  const { data: frontEndData } = useFetch(getFrontEndData);
  const { data: backEndData } = useFetch(getBackEndData);

  return (
    <div className="h-[calc(100vh-7.5rem)] flex flex-col">
      <div className="container mx-auto mt-10 px-2 sm:px-0">
        <p className="text-center sm:text-left">{siteDescription}</p>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-10 mt-10 mb-5 px-2 sm:flex-row sm:px-0">
        <Card
          imageUrl={frontEndData?.organization.avatar_url}
          title={frontEndData?.organization.login}
          description={frontEndData?.description}
          redirectUrl="/frontendbr"
        />
        <Card
          imageUrl={backEndData?.organization.avatar_url}
          title={backEndData?.organization.login}
          description={backEndData?.description}
          redirectUrl="/backend-br"
        />
      </div>
    </div>
  );
};
