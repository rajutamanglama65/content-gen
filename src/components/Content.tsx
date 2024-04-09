import React from "react";

interface Props {}

const contentData = [
  {
    id: 1,
    title: "All about serverless function",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
    question1: "What is serverless function?",
    ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
    question2: "How does it help in software development?",
    ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
  },
  {
    id: 2,
    title: "Pros and Cons of serverless function",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
    question1: "Advantages of serverless function",
    ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
    question2: "Disadvantages of serverless function",
    ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
  },
];
const Content = ({ clickedLessonId }: any) => {
  console.log("from content: ", clickedLessonId);
  return (
    <>
      <div className="wrapper flex block-view split-pair">
        <h1>
          Title:{" "}
          {clickedLessonId === 1
            ? contentData[0].title
            : clickedLessonId === 2
            ? contentData[1].title
            : contentData[0].title}
        </h1>
        <div>
          <h1>Introduction</h1>
          <span>{contentData[0].intro}</span>
        </div>

        <div>
          <h1>Lesson</h1>
          <h3>{contentData[0].question1}</h3>
          <span>{contentData[0].ans1}</span>

          <h3 style={{ margin: "0.5rem 0" }}>{contentData[0].question2}</h3>
          <span>{contentData[0].ans2}</span>
        </div>
        <div className="flex split-pair align-center region-margin-sm">
          <span className="btn">Prev</span>
          <span className="btn">Next</span>
        </div>
      </div>
    </>
  );
};

export default Content;
