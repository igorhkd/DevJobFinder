import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { siteDescription } from "../config";
import { useFetchMultiple } from "../service/repositoryData/hooks/useFetchMultiple";
import { repositoryUrls } from "./constants";

export const Home = () => {
  const { data, loading } = useFetchMultiple(repositoryUrls);

  if (loading) return <Loading />;

  return (
    <div className="min-h-[calc(100vh-7.5rem)] flex flex-col">
      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <p className="text-center sm:text-left font-normal text-xl">
          {siteDescription}
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap mt-20 mb-5 px-4 sm:px-0">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/4 flex p-2 justify-center sm:justify-between"
          >
            <Card
              imageUrl={item.organization.avatar_url}
              title={item.organization.login}
              description={item.description}
              redirectUrl={`${item.organization.login}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
