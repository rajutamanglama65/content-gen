import React from "react";

type Props = {};

const UploadBar = (props: Props) => {
  return (
    <>
      <div className="flex split-pair align-center">
        <div style={{ width: "50%" }}>
          <form>
            <input
              placeholder="enter a url"
              type="text"
              className="input-field"
              // style={{ width: "50%" }}
            />
            <button className="region-margin-tn primary-button">Fetch</button>
          </form>
        </div>

        <div>
          <button className="primary-button">Upload</button>
        </div>
      </div>
    </>
  );
};

export default UploadBar;
