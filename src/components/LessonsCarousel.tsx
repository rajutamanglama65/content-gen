import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LessonCard from "./LessonCard";

interface Props {}

const data = [
  {
    id: 1,
    name: `Lesson 1`,
    img: `https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600`,
    secondaryText: `Lorem ipsum dolor`,
  },
  {
    id: 2,
    name: `Lesson 2`,
    img: `https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=600`,
    secondaryText: `Lorem ipsum dolor`,
  },
  {
    id: 3,
    name: `Lesson 3`,
    img: `https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=600`,
    secondaryText: `Lorem ipsum dolor`,
  },
  {
    id: 4,
    name: `Lesson 4`,
    img: `https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=600`,
    secondaryText: `Lorem ipsum dolor`,
  },
  {
    id: 5,
    name: `Lesson 5`,
    img: `https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600`,
    secondaryText: `Lorem ipsum dolor`,
  },
];

function Arrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#661aff",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

const LessonCarousel = ({ setClickedLessonId }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="wrapper" style={{ cursor: "pointer" }}>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="region-margin-tn" key={item.id}>
              <LessonCard setClickedLessonId={setClickedLessonId} item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default LessonCarousel;
