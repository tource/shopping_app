import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:productid" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
