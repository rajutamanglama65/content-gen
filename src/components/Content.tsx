import React from "react";

interface Props {}

const contentData = [
  {
    id: 1,
    contenTitle: "Serverless data",
    lessons: [
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
    ],
  },
  {
    id: 2,
    contenTitle: "Public data",
    lessons: [
      {
        id: 1,
        title: "All about public beta",
        intro:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
        question1: "What is serverless function?",
        ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
        question2: "How does it help in software development?",
        ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
      },
      {
        id: 2,
        title: "Pros and Cons of public beta",
        intro:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
        question1: "Advantages of public beta",
        ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
        question2: "Disadvantages of public beta",
        ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
      },
      {
        id: 3,
        title: "Public beta and it's uses",
        intro:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
        question1: "Parameter of public beta",
        ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
        question2: "Public beta in last 5 years",
        ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
      },
    ],
  },
  {
    id: 3,
    contenTitle: "SSL certificate",
    lessons: [
      {
        id: 1,
        title: "All about SSL certificate",
        intro:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
        question1: "What is serverless function?",
        ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
        question2: "How does it help in software development?",
        ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
      },
      {
        id: 2,
        title: "Process of obtaining SSL certifcate",
        intro:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
        question1: "Advantages of serverless function",
        ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
        question2: "Disadvantages of serverless function",
        ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
      },
      {
        id: 3,
        title: "Implementation of SSL certificate",
        intro:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
        question1: "Parameter of public beta",
        ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
        question2: "Public beta in last 5 years",
        ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
      },
      {
        id: 4,
        title: "SSL certificate and it's uses",
        intro:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisunde quia pariatur! Doloremque repellat voluptatem exercitationem deleniti iure quisquam, rem dolor, consectetur quas nobis beatae saepe. Voluptatum odio aperiam minima.",
        question1: "Parameter of public beta",
        ans1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
        question2: "Public beta in last 5 years",
        ans2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex. Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste",
      },
    ],
  },
];
const Content = ({ clickedLessonId, topic }: any) => {
  // console.log("from content: ", clickedLessonId);
  // console.log("topic content: ", topic);
  return (
    <>
      {contentData.map((cnt) =>
        cnt.id === topic ? (
          <div key={cnt.id} className="wrapper flex block-view split-pair">
            <h1>
              Title:{" "}
              {clickedLessonId === 1 || topic === 1
                ? contentData[0].lessons[0].title
                : clickedLessonId === 2 || topic === 2
                ? contentData[1].lessons[1].title
                : clickedLessonId === 3 || topic === 3
                ? contentData[2].lessons[2].title
                : clickedLessonId === 4 || topic === 4
                ? contentData[3].lessons[3].title
                : contentData[0].lessons[0].title}
            </h1>
            <div>
              <h1>Introduction</h1>
              <span>
                {clickedLessonId === 1 || topic === 1
                  ? contentData[0].lessons[0].intro
                  : clickedLessonId === 2 || topic === 2
                  ? contentData[1].lessons[1].intro
                  : clickedLessonId === 3 || topic === 3
                  ? contentData[2].lessons[2].intro
                  : clickedLessonId === 4 || topic === 4
                  ? contentData[3].lessons[3].intro
                  : contentData[0].lessons[0].intro}
              </span>
            </div>

            <div>
              <h1>Lesson</h1>
              <h3>
                {clickedLessonId === 1 || topic === 1
                  ? contentData[0].lessons[0].question1
                  : clickedLessonId === 2 || topic === 2
                  ? contentData[1].lessons[1].question1
                  : clickedLessonId === 3 || topic === 3
                  ? contentData[2].lessons[2].question1
                  : clickedLessonId === 4 || topic === 4
                  ? contentData[3].lessons[3].question1
                  : contentData[0].lessons[0].question1}
              </h3>
              <span>
                {clickedLessonId === 1 || topic === 1
                  ? contentData[0].lessons[0].ans1
                  : clickedLessonId === 2 || topic === 2
                  ? contentData[1].lessons[1].ans1
                  : clickedLessonId === 3 || topic === 3
                  ? contentData[2].lessons[2].ans1
                  : clickedLessonId === 4 || topic === 4
                  ? contentData[3].lessons[3].ans1
                  : contentData[0].lessons[0].ans1}
              </span>

              <h3 style={{ margin: "0.5rem 0" }}>
                {clickedLessonId === 1 || topic === 1
                  ? contentData[0].lessons[0].question2
                  : clickedLessonId === 2 || topic === 2
                  ? contentData[1].lessons[1].question2
                  : clickedLessonId === 3 || topic === 3
                  ? contentData[2].lessons[2].question2
                  : clickedLessonId === 4 || topic === 4
                  ? contentData[3].lessons[3].question2
                  : contentData[0].lessons[0].question2}
              </h3>
              <span>
                {clickedLessonId === 1 || topic === 1
                  ? contentData[0].lessons[0].ans2
                  : clickedLessonId === 2 || topic === 2
                  ? contentData[1].lessons[1].ans2
                  : clickedLessonId === 3 || topic === 3
                  ? contentData[2].lessons[2].ans2
                  : clickedLessonId === 4 || topic === 4
                  ? contentData[3].lessons[3].ans2
                  : contentData[0].lessons[0].ans2}
              </span>
            </div>
            <div className="flex split-pair align-center region-margin-sm">
              <span className="btn">Prev</span>
              <span className="btn">Next</span>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default Content;
