import React, { useState } from "react";
import LessonCarousel from "../components/LessonsCarousel";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";

interface Props {
  topic: number;
  // setClickedLessonId: (id: any) => void;
}

const ContentPage = (props: Props) => {
  const [clickedLessonId, setClickedLessonId] = useState(0);
  // console.log("setClickedLessonId: ", clickedLessonId);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <div className="wrapper">
      <button
        onClick={navigateHandler}
        className="btn-navigator  region-margin-tn"
      >
        Go Back
      </button>
      {/* <LessonCarousel
        setClickedLessonId={setClickedLessonId}
        clickedLessonId={clickedLessonId}
      /> */}
      <Content />
    </div>
  );
};

export default ContentPage;
