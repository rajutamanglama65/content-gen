import React from "react";
import UploadBar from "../components/UploadBar";
import Options from "../components/Options";

interface Props {}

const HomePage = (props: Props) => {
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
              <Options keyword={item.keyword} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
