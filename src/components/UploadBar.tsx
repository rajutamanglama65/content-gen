import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { generateTopicFromURL, generateTopicsFromFile } from "../services/apis";
import { UrlTopicContext } from "../context/urlTopicContext";

// https://6vg60bqm-8000.inc1.devtunnels.ms/generateTopicsFromURL   --> topic gen

// response body
// [
//   "HubSpot CMS overview",
//   "Introduction to API and its usage",
//   "Basics of JavaScript and NodeJS programming"
// ]

// https://6vg60bqm-8000.inc1.devtunnels.ms/generateTopicsFromFile --> pdf topic gen

type Props = {};

const UploadBar = (props: Props) => {
  const customStyles = {
    content: {
      top: "10%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      border: "1px solid #884dff",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [urlVal, setUrlVal] = useState({
    url: "",
  });
  const [file, setFile] = useState(null);
  // const [loader, setLoader] = useState(false)

  const { setTopicData, setLoading, loading } = useContext(UrlTopicContext);

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    Modal.setAppElement("#root"); // Set the app element
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const urlTopicGenHandler = async (e: any, url: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const topic = await generateTopicFromURL(url);
      console.log("topic: ", topic);

      setTopicData(topic);

      console.log("topic: ", topic);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      urlVal.url = "";
    }
  };

  const fileTopicGenHandler = async (e: any, file: any) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = generateTopicsFromFile(formData);

      console.log("topicPDF: ", response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div className="flex block-view align-center" style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <form
            style={{ width: "100%" }}
            onSubmit={(e) => urlTopicGenHandler(e, urlVal)}
          >
            <input
              placeholder="enter a url"
              type="text"
              className="input-field"
              value={urlVal.url}
              onChange={(e) => setUrlVal({ ...urlVal, url: e.target.value })}
            />
            <button className="region-margin-tn primary-button" type="submit">
              {loading === true
                ? "Loading..."
                : "Please provide a URL to generate topics"}
            </button>
          </form>
        </div>

        <button className="primary-button" onClick={openModal}>
          Upload pdf file to generate topics
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={(e) => fileTopicGenHandler}>
          <input type="file" multiple />
          <div className="flex split-pair align-center region-top-margin-md">
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UploadBar;
