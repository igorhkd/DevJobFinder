import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FrontEndPage } from "./pages/FrontEndPage";
import { BackEndPage } from "./pages/BackEndPage";
import { DetailsPage } from "./pages/DetailsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontendbr" element={<FrontEndPage />} />
      <Route path="frontendbr/:id" element={<DetailsPage />} />
      <Route path="/backend-br" element={<BackEndPage />} />
      <Route path="/backend-br/:id" element={<DetailsPage />} />
    </Routes>
  );
};
