import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="content" element={<ContentPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
