import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  keyword: string;
  id: number;
  setTopic: (id: any) => void;
}

const Options = (props: Props) => {
  const navigate = useNavigate();

  const navigateHandler = (id: number) => {
    props.setTopic(id);
    navigate("/content");
  };
  return (
    <>
      <div className="region-tn">
        <button
          onClick={() => navigateHandler(props.id)}
          className="display-btn"
        >
          Teach me about {props.keyword}
        </button>
      </div>
    </>
  );
};

export default Options;
