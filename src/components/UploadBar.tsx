import { useEffect, useState } from "react";
import Modal from "react-modal";

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

  useEffect(() => {
    Modal.setAppElement("#root"); // Set the app element
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("submitted..");
  };

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
          <button className="primary-button" onClick={openModal}>
            Upload
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={submitHandler}>
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
