import { createContext, useState } from "react";

type UrlTopicType = {
  topicData: any;
  setTopicData: any;
  loading: any;
  setLoading: any;
};

export const UrlTopicContext = createContext<UrlTopicType>({
  topicData: null,
  setTopicData: () => {},
  loading: false,
  setLoading: () => {},
});

export function UrlTopicContextProvider({ children }: any) {
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <UrlTopicContext.Provider
      value={{ topicData, setTopicData, loading, setLoading }}
    >
      {children}
    </UrlTopicContext.Provider>
  );
}
