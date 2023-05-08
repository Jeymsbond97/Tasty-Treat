import React from "react";
import { Col, Row } from "reactstrap";
import { Content, Wrapper } from "./style";
import Social from '../../../icons/S.png'
import Carousel from "./Slider";

const Testmonial = ()=>{

    return(
       <Wrapper>
          <Row className="mt-5 mb-5">
            <Col md='6' lg='6' className="mt-5">
                <Content>
                    <h5 className="mb-4"><span>Testimonial</span></h5>
                    <h2 className="mb-4">What are our 
                     <span> customers </span>
                     say</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>

                 <Carousel/>
                </Content>
            </Col>
            <Col md='6' lg='6'>
                <div>
                    <img src={Social} alt="Social pictures" className="w-100" />
                </div>
            </Col>
          </Row>
       </Wrapper>
    )
}
export default Testmonial