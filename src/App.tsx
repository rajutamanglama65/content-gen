import React from "react";
import Router from "./Router";
import Navbar from "./components/Navbar";
import { UrlTopicContextProvider } from "./context/urlTopicContext";
import { ContentContextProvider } from "./context/contentContext";

function App() {
  return (
    <ContentContextProvider>
      <UrlTopicContextProvider>
        <Navbar />
        <Router />
      </UrlTopicContextProvider>
    </ContentContextProvider>
  );
}

export default App;
