import React from "react";
import { Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import { Content, Title, Wrapper } from "./style";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import Why from  '../../../icons/Why.png'

const WhyTasty =()=>{
    return(
        <Wrapper>
            <Row className="mt-5">
                <Col lg='6' md='4'>
                    <img src={Why} alt="why" className="w-100" />
                </Col>
                <Col lg='6' md='6'  className="d-flex">
                    <Content className="content">
                        <h2 className="mb-4">Why <span>Tasty Treat?</span></h2>
                        <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
                        <ListGroup  className="border-0">
                            <ListGroupItem className="list_group border-0 ">
                                <Title><CheckCircleOutlineSharpIcon  style={{color: 'red', marginRight: '15px'}}></CheckCircleOutlineSharpIcon>Fresh and tasty foods</Title>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                            </ListGroupItem>
                            <ListGroupItem className="list_group border-0">
                                <Title className=""><CheckCircleOutlineSharpIcon style={{color: 'red', marginRight: '15px' }}></CheckCircleOutlineSharpIcon>Quality support</Title>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                            </ListGroupItem>
                            <ListGroupItem className="list_group border-0 ">
                                <Title><CheckCircleOutlineSharpIcon style={{color: 'red', marginRight: '15px'}}></CheckCircleOutlineSharpIcon>Order from any location</Title>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Content>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default WhyTasty;