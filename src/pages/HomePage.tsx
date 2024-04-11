import React from "react";
import UploadBar from "../components/UploadBar";
import Options from "../components/Options";

interface Props {
  setTopic: (options: any) => void;
}

const HomePage = ({ setTopic }: Props) => {
  return (
    <>
      <div className="wrapper region-md">
        <div
          className="flex block-view"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <h1 className="text-center">MicroLesson Generator</h1>
          <UploadBar />
          <div>
            <Options />
          </div>
        </div>

        {/* <div className="flex align-center block-view">
          {keywords.map((item) => (
            <div key={item.id}>
              <Options
                keyword={item.keyword}
                id={item.id}
                setTopic={setTopic}
              />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
