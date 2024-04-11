import React from "react";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="wrapper flex block-view split-pair">
      <h1>Title: All about serverless function</h1>
      <div>
        <h1>Introduction</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiisunde quia pariatur! Doloremque repellat voluptatem
          exercitationem deleniti iure quisquam, rem dolor, consectetur quas
          nobis beatae saepe. Voluptatum odio aperiam minima.
        </span>
      </div>
      <div>
        <h1>Lesson</h1>
        <h3>Serverless data</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sed praesentium tempora sequi. Repudiandae, alias ex. Vero
          perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas
          enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam
          quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sed praesentium tempora sequi. Repudiandae, alias ex. Vero
          perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas
          enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam
          quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste
        </span>

        <h3 style={{ margin: "0.5rem 0" }}>
          Pros and Cons of serverless function
        </h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sed praesentium tempora sequi. Repudiandae, alias ex. Vero
          perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas
          enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam
          quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sed praesentium tempora sequi. Repudiandae, alias ex. Vero
          perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam quas
          enim aut! <br /> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste, magnam
          quas enim aut! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sed praesentium tempora sequi. Repudiandae, alias ex.
          Vero perspiciatis dolores quia eos ex quasi? Minus beatae iste
        </span>
      </div>
      <div className="flex split-pair align-center region-margin-sm">
        {/* <span className="btn-navigator">Prev</span>
        <span className="btn-navigator">Next</span> */}
      </div>
    </div>
  );
};

export default Content;
