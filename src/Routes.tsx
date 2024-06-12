import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FrontEndPage } from "./pages/FrontEndPage";
import { BackEndPage } from "./pages/BackEndPage";
import { DetailsPage } from "./pages/DetailsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontend" element={<FrontEndPage />} />
      <Route path="frontend/:id" element={<DetailsPage />} />
      <Route path="/backend" element={<BackEndPage />} />
      <Route path="/backend/:id" element={<DetailsPage />} />
    </Routes>
  );
};
