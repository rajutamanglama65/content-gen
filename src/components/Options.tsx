import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  // keyword: string;
  // id: number;
  setTopic: (id: any) => void;
}

const Options = (props: any) => {
  const keywords = [
    { id: 1, keyword: "serverless function" },
    { id: 2, keyword: "public beta" },
    { id: 3, keyword: "SSL certificate" },
  ];

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/content");
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      navigateHandler();
    }
  }, [loading]);
  return (
    <>
      <div className="region-md">
        {/* <button
          onClick={() => navigateHandler(props.id)}
          className="display-btn"
        >
          Teach me about {props.keyword}
        </button> */}

        <form onSubmit={submitHandler}>
          {keywords.map((item: any) => (
            <div key={item.id} className="flex gap-1">
              <input type="radio" />
              <label>Teach me about {item.keyword}</label>
            </div>
          ))}
          <button type="submit" className="btn region-top-margin-tn">
            Generate
          </button>
        </form>
      </div>
    </>
  );
};

export default Options;
