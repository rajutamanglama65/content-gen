import React, { useState } from "react";
import LessonCarousel from "../components/LessonsCarousel";
import Content from "../components/Content";

interface Props {
  topic: number;
  // setClickedLessonId: (id: any) => void;
}

const ContentPage = (props: Props) => {
  const [clickedLessonId, setClickedLessonId] = useState(0);
  // console.log("setClickedLessonId: ", clickedLessonId);
  return (
    <div>
      <LessonCarousel
        setClickedLessonId={setClickedLessonId}
        clickedLessonId={clickedLessonId}
      />
      <Content clickedLessonId={clickedLessonId} topic={props.topic} />
    </div>
  );
};

export default ContentPage;
