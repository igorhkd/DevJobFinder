import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { footerMessage, headerTitle } from "./config";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Header title={headerTitle} />
      <AppRoutes />
      <Footer message={footerMessage} />
    </BrowserRouter>
  );
}

export default App;
