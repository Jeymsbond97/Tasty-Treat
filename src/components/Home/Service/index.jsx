import React from "react";
import { Row, Col } from "reactstrap";
import Delivery from "../../../icons/a.png";
import Diner from "../../../icons/b.png";
import Food from "../../../icons/c.png";
import { Wrapper } from "./style";

const data = [
  {
    id: 1,
    img: Delivery,
    display: "Quick Delivery",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    id: 2,
    img: Diner,
    display: "Super Dine In",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    id: 3,
    img: Food,
    display: "Asian Food",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Service = () => {
  return (
    <Wrapper>
      <Row>
        <Col lg="12" className="text-center">
          <h5 className="mb-4">
            <span>What we serve</span>
          </h5>
          <h2>Just sit back at home</h2>
          <h2> we will <span>take care</span></h2>
          <p className="lorem mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?</p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</p>
        </Col>
        
           {
            data.map((value)=>(
               <Col md='6' lg='4' sm='6' key={value.id} className="mt-5">
                 <div className="text-center px-3 py-3">
                    <img src={value.img} alt="logo" className="w-25 mb-2" />
                    <h5 className="mt-3 fw-bold">{value.display}</h5>
                    <p className="lorem mt-3">{value.title}</p>
                 </div>
               </Col>
            ))
           }
        
      </Row>
    </Wrapper>
  );
};

export default Service;
