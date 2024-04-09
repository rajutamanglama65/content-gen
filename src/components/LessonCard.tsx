import React from "react";

type Props = {};

const LessonCard = ({ item, setClickedLessonId }: any) => {
  return (
    <div style={{ margin: "0 0.5em" }}>
      <div
        onClick={() => setClickedLessonId(item.id)}
        className="flex align-center card-border card-padding crd-size"
      >
        <div className="img-style">
          <img src={item.img} alt="pic" />
        </div>
        <div className="flex block-view region-side-left-sm">
          <h2>{item.name}</h2>
          <p>{item.secondaryText}</p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
