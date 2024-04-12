import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UrlTopicContext } from "../context/urlTopicContext";
import { ContentContext } from "../context/contentContext";
import { generateContent } from "../services/apis";

interface Props {
  setTopic: (id: any) => void;
}

const Options = (props: any) => {
  const { topicData } = useContext(UrlTopicContext);
  const { setContentData, setLoading, loading, contentData } =
    useContext(ContentContext);
  console.log("cata: ", contentData);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [topicVal, setTopicVal] = useState({
    topic: "",
  });
  const keywords = [
    { id: 1, keyword: "serverless function" },
    { id: 2, keyword: "public beta" },
    { id: 3, keyword: "SSL certificate" },
  ];

  const warningNotification = (msg: string) =>
    toast.warning(msg, { className: "toast-msg" });

  const errNotification = (msg: string) =>
    toast.error(msg, { className: "toast-msg" });

  const navigate = useNavigate();

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setTopicVal({ ...topicVal, topic: e.target.value });
  };

  const navigateHandler = () => {
    navigate("/content");
  };

  const submitHandler = async (e: any, topic: any) => {
    e.preventDefault();

    setLoading(true);

    if (!topic.topic) {
      warningNotification("Please select a topic!");
      setLoading(false);
      return;
    }
    try {
      const content = await generateContent(topic);

      if (content === undefined) {
        return errNotification("Something went wrong in server!");
      }

      setContentData(content);
      navigateHandler();
      console.log("contentData12: ", contentData);
    } catch (error) {
      console.error("Error:", error);
      errNotification("Something went wrong in server!");
    } finally {
      setLoading(false);
      topicVal.topic = "";
    }
  };

  console.log("topicData: ", topicData);

  return (
    <>
      {topicData === null || topicData === "Network Error" ? (
        <>
          <div className="region-md">
            <form onSubmit={(e) => submitHandler(e, topicVal)}>
              {keywords?.map((item: any) => (
                <div key={item.id} className="flex gap-1">
                  <input
                    type="radio"
                    value={item.keyword}
                    checked={selectedOption === item.keyword}
                    onChange={handleOptionChange}
                  />
                  <label>Teach me about {item.keyword.toLowerCase()}</label>
                </div>
              ))}
              <button type="submit" className="btn region-top-margin-tn">
                {loading ? "Loading..." : "Generate"}
              </button>
            </form>
            <ToastContainer />
          </div>
        </>
      ) : (
        <>
          <div className="region-md">
            <form onSubmit={(e) => submitHandler(e, topicVal)}>
              {topicData &&
                topicData?.map((item: any, index: any) => (
                  <div key={index} className="flex gap-1">
                    <input
                      type="radio"
                      value={item}
                      checked={selectedOption === item}
                      onChange={handleOptionChange}
                    />
                    <label>Teach me about {item.toLowerCase()}</label>
                  </div>
                ))}
              <button type="submit" className="btn region-top-margin-tn">
                {loading ? "Loading..." : "Generate"}
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Options;
