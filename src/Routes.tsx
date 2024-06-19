import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailsPage } from "./pages/DetailsPage";
import { SKillPage } from "./pages/SkillPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="frontendbr/:id" element={<DetailsPage />} />
      <Route path="/backend-br/:id" element={<DetailsPage />} />
      <Route path="/dotnetdevbr/:id" element={<DetailsPage />} />
      <Route path="/react-brasil/:id" element={<DetailsPage />} />
      <Route
        path="/frontendbr"
        element={<SKillPage title="Front-End" linkUrl="frontendbr" />}
      />
      <Route
        path="/backend-br"
        element={<SKillPage title="Back-End" linkUrl="backend-br" />}
      />
      <Route
        path="/dotnetdevbr"
        element={<SKillPage title=".NET" linkUrl="dotnetdevbr" />}
      />
      <Route
        path="/react-brasil"
        element={<SKillPage title="React" linkUrl="react-brasil" />}
      />
    </Routes>
  );
};
