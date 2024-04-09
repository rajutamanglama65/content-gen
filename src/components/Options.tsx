import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  keyword: string;
}

const Options = (props: Props) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/content");
  };
  return (
    <>
      <div className="region-tn">
        <button onClick={navigateHandler} className="display-btn">
          Teach me about {props.keyword}
        </button>
      </div>
    </>
  );
};

export default Options;
