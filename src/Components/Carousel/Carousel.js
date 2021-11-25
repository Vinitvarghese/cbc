import { Carousel as CarouselAnt } from "antd";
import Style from "./Carousel.module.scss";
import carouselItems from "../../Assets/Img/carouselItems";
const Carousel = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}></div>
    );
  };
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <CarouselAnt
        effect="fade"
        dots={true}
        autoplay={true}
        arrows
        {...settings}
      >
        {carouselItems.map((item, index) => {
          return (
            <div key={index}>
              <img className={Style.CarouselImg} src={item.img} alt="" />
              <div className={`${Style.container} container`}>
                <div className={Style.textWrap}>
                  <h1 className={Style.title}>{item.title}</h1>
                  <h5 className={Style.description}>{item.description}</h5>
                  <button>FIND OUT MORE</button>
                </div>
              </div>
            </div>
          );
        })}
      </CarouselAnt>
    </div>
  );
};

export default Carousel;
