import React from "react";
import UploadBar from "../components/UploadBar";
import Options from "../components/Options";

interface Props {
  setTopic: (options: any) => void;
}

const HomePage = ({ setTopic }: Props) => {
  const keywords = [
    { id: 1, keyword: "serverless function" },
    { id: 2, keyword: "public beta" },
    { id: 3, keyword: "SSL certificate" },
  ];
  return (
    <>
      <div className="wrapper region-md">
        <UploadBar />
        <div className="flex align-center block-view">
          {keywords.map((item) => (
            <div key={item.id}>
              <Options
                keyword={item.keyword}
                id={item.id}
                setTopic={setTopic}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
