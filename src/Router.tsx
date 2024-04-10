import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import { useState } from "react";

const Router = () => {
  const [topic, setTopic] = useState(0);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage setTopic={setTopic} />} />
        <Route path="content" element={<ContentPage topic={topic} />} />
      </Route>
    </Routes>
  );
};

export default Router;
