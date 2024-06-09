import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFetch } from "./hooks/useFetch";
import { getBackEndData, getFrontEndData } from "./service/repositoryData";
import { footerMessage, headerTitle, siteDescription } from "./config";

function App() {
  const { data: frontEndData } = useFetch(getFrontEndData);
  const { data: backEndData } = useFetch(getBackEndData);

  return (
    <div className="min-h-screen flex flex-col">
      <Header title={headerTitle} />
      <div className="container mx-auto mt-10 px-2 sm:px-0">
        <p className="text-center sm:text-left">{siteDescription}</p>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-10 mt-10 mb-5 px-2 sm:flex-row sm:px-0">
        <Card
          imageUrl={frontEndData?.organization.avatar_url}
          title={frontEndData?.organization.login}
          description={frontEndData?.description}
        />
        <Card
          imageUrl={backEndData?.organization.avatar_url}
          title={backEndData?.organization.login}
          description={backEndData?.description}
        />
      </div>
      <Footer message={footerMessage} />
    </div>
  );
}

export default App;
