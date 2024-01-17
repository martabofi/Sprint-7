import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../assets/sw-hero-1.jpeg";
import hero2 from "../assets/sw-hero-2.jpeg";
import hero3 from "../assets/sw-hero-3.jpeg";
import hero4 from "../assets/sw-hero-4.jpeg";
import hero5 from "../assets/sw-hero-5.jpeg";

const WelcomePage: React.FC = () => {
  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
        <div className="full-screen-slider">
          <Slider {...settings}>
            <div>
              <img src={hero1} alt="Imagen 1" />
            </div>
            <div>
              <img src={hero2} alt="Imagen 2" />
            </div>
            <div>
              <img src={hero3} alt="Imagen 3" />
            </div>
            <div>
              <img src={hero4} alt="Imagen 4" />
            </div>
            <div>
              <img src={hero5} alt="Imagen 5" />
            </div>
          </Slider>
        </div>
    </>
  );
};

export default WelcomePage;
