import { createContext, useState } from "react";

type UrlTopicType = {
  contentData: any;
  setContentData: any;
  loading: any;
  setLoading: any;
};

export const ContentContext = createContext<UrlTopicType>({
  contentData: null,
  setContentData: () => {},
  loading: false,
  setLoading: () => {},
});

export function ContentContextProvider({ children }: any) {
  const [contentData, setContentData] = useState(null);
  console.log("data: ", contentData);
  const [loading, setLoading] = useState(false);

  return (
    <ContentContext.Provider
      value={{ contentData, setContentData, loading, setLoading }}
    >
      {children}
    </ContentContext.Provider>
  );
}
