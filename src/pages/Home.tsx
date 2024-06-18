import { Card } from "../components/Card";
import { siteDescription } from "../config";
import { useFetchMultiple } from "../service/repositoryData/hooks/useFetchMultiple";

const repositoryUrls = ["frontendbr", "backend-br"];

export const Home = () => {
  const { data, error, loading } = useFetchMultiple(repositoryUrls);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="sm:h-[calc(100vh-7.5rem)] flex flex-col">
      <div className="container mx-auto mt-10 px-2 sm:px-0">
        <p className="text-center sm:text-left">{siteDescription}</p>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-10 mt-10 mb-5 px-2 sm:flex-row sm:px-0">
        {data.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.organization.avatar_url}
            title={item.organization.login}
            description={item.description}
            redirectUrl={`${item.organization.login}`}
          />
        ))}
      </div>
    </div>
  );
};
