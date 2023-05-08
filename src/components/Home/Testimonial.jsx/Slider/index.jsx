import React from "react";
import Slider from "react-slick";
import Ava1 from "../../../../icons/images/ava1.jpg"
import Ava2 from "../../../../icons/images/ava2.jpg"
import Ava3 from "../../../../icons/images/ava3.jpg"
import { Content } from "./style";

const Carousel = () => {

  const setting = {
    dots: true,
    autoplay: true,
    Infinity: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...setting} className='mt-5'>
      <Content >
        <p className="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquam quae blanditiis inventore maiores consequatur ex eum unde. Eius fugit commodi beatae laudantium eligendi reprehenderit ? </p>
        <div className="d-flex gap-3 align-items-center mt-4">
            <img src={Ava3} alt="avatar1" className=" rounded" />
            <h5>Jhon Adam</h5>
        </div>
      </Content>
      <Content >
        <p className="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquam quae blanditiis inventore maiores consequatur ex eum unde. Eius fugit commodi beatae laudantium eligendi reprehenderit ? </p>
        <div className="d-flex gap-3 align-items-center mt-4">
            <img src={Ava1} alt="avatar1" className=" rounded" />
            <h5>Fatima Akhmed</h5>
        </div>
      </Content>
      <Content >
        <p className="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquam quae blanditiis inventore maiores consequatur ex eum unde. Eius fugit commodi beatae laudantium eligendi reprehenderit ? </p>
        <div className="d-flex gap-3 align-items-center mt-4">
            <img src={Ava2} alt="avatar1" className=" rounded" />
            <h5>Mr. James</h5>
        </div>
      </Content>
    </Slider>
  );
};

export default Carousel