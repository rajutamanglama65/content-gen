import React from "react";

import "react-toastify/dist/ReactToastify.css";
import UploadBar from "../components/UploadBar";
import Options from "../components/Options";
// import { ContentContext } from "../context/contentContext";

interface Props {
  setTopic: (options: any) => void;
}

const HomePage = ({ setTopic }: Props) => {
  // const { contentData } = useContext(ContentContext);
  // console.log("cntData: ", contentData);

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
