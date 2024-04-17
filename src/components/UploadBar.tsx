import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { generateTopicFromURL, generateTopicsFromFile } from "../services/apis";
import { UrlTopicContext } from "../context/urlTopicContext";
import { idb, insertDataInIndexedDb } from "../cache/idb";

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
  const [IdbData, setIdbData] = useState<any>([]);
  const [urlExist, setUrlExist] = useState<boolean>(false);

  const { setTopicData, setLoading, loading, topicData } =
    useContext(UrlTopicContext);

  useEffect(() => {
    Modal.setAppElement("#root"); // Set the app element
    insertDataInIndexedDb();
    getDataFromIdb();
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

  const warningNotification = (msg: string) =>
    toast.warning(msg, { className: "toast-msg" });

  const successNotification = (msg: string) =>
    toast.success(msg, { className: "toast-msg" });

  const errNotification = (msg: string) =>
    toast.error(msg, { className: "toast-msg" });

  const getDataFromIdb = () => {
    const dbPromise = idb.open("cache-idx-db", 1);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;

      const tx = db.transaction("responseData", "readonly");
      const dataObjStore = tx.objectStore("responseData");
      const data = dataObjStore.getAll();

      data.onsuccess = (query: any) => {
        setIdbData(query.srcElement.result);
      };

      tx.oncomplete = function () {
        db.close();
      };
    };
  };

  const checkUrlInIdb = (url: any) => {
    console.log("url: ", url);
    const dbPromise = idb.open("cache-idx-db", 1);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;

      const tx = db.transaction("responseData", "readonly");
      const urlData = tx.objectStore("responseData");
      const urls = urlData.get(url);

      urls.onsuccess = (event: any) => {
        if (event.target.result) {
          // Key exists
          console.log("Key exists:", event.target.result);
          setUrlExist(true);
        } else {
          // Key does not exist
          console.log("Key does not exist");
          setUrlExist(false);
        }
      };

      tx.oncomplete = function () {
        db.close();
      };
    };
  };

  const urlTopicGenHandler = async (e: any, url: any) => {
    e.preventDefault();
    setLoading(true);

    if (!url.url || validator.isURL(url.url) === false) {
      warningNotification("Please enter a valid URL!");
      setLoading(false);
      return;
    }

    checkUrlInIdb(url.url);

    if (!urlExist) {
      try {
        const topic = await generateTopicFromURL(url);
        // console.log("topic: ", topic);
        // if (topic === "Network Error") {
        //   return errNotification(`${topic}!`);
        // }

        setTopicData(topic);

        console.log("topic: ", topic);
      } catch (error) {
        console.log("Error:", error);
        // errNotification("Something went wrong in server!");
      } finally {
        setLoading(false);
        setUrlVal({ url: "" });
      }

      if (topicData) {
        const dbPromise = idb.open("cache-idx-db", 1);
        dbPromise.onsuccess = () => {
          const db = dbPromise.result;

          const tx = db.transaction("responseData", "readwrite");

          const resData = tx.objectStore("responseData");

          const data = resData.add({
            id: url.url,
            content: topicData,
          });

          data.onsuccess = () => {
            tx.oncomplete = () => {
              db.close();
              successNotification("data cached");
            };
          };
        };
      } else {
        return;
      }
    } else {
      const dbPromise = idb.open("cache-idx-db", 1);
      dbPromise.onsuccess = () => {
        const db = dbPromise.result;

        const tx = db.transaction("responseData", "readonly");
        const dataObjStore = tx.objectStore("responseData");
        const data = dataObjStore.get(url.url);

        data.onsuccess = (query: any) => {
          setTopicData(query.srcElement.result);
        };

        tx.oncomplete = function () {
          db.close();
        };
      };
    }
  };

  const fileTopicGenHandler = async (e: any, file: any) => {
    e.preventDefault();
    setLoading(true);

    if (!file) {
      warningNotification("Please select a file.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await generateTopicsFromFile(formData);

      // if (response === "Network Error") {
      //   return errNotification(`${response}!`);
      // }
      console.log("topicPDF: ", response);
      setTopicData(response);
    } catch (error) {
      console.error("Error uploading file:", error);
      // errNotification("Something went wrong on the server!");
    } finally {
      setLoading(false);
      setFile(null);
      closeModal();
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
        <ToastContainer />
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={(e) => fileTopicGenHandler(e, file)}>
          <input type="file" onChange={handleFileChange} multiple />
          <div className="flex split-pair align-center region-top-margin-md">
            <button className="btn" type="submit">
              {loading ? "Loading..." : "Submit"}
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
