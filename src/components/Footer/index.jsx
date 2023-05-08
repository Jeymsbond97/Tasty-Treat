import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../../icons/images/logo1.png";
import { Logo, Container, Wrapper, Span, P, LogoLorem, Input, Social } from "./style";



const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row className="mt-5 mb-5">
          <Col lg="3" md="4" sm="6">
            <div className="logo">
              <Logo src={logo} alt="logo" loading="lazy" />
              <h5>Tasty Treat</h5>
              <LogoLorem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </LogoLorem>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4>Delivery Time</h4>
            <ListGroup>
              <ListGroupItem
                style={{ background: "transparent" }}
                className="border-0 ps-0"
              >
                <Span>Sunday - Thursday</Span>
                <P>10:00am - 11:00pm</P>
              </ListGroupItem>
              <ListGroupItem
                style={{ background: "transparent" }}
                className="border-0 ps-0"
              >
                <Span>Friday - Saturday</Span>
                <P>Off day</P>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4>Contact</h4>
            <ListGroup >
              <ListGroupItem
                style={{ background: "transparent", alignItems: 'left' }}
                className="border-0"
              >
                <P>Location: ZindaBazar, Sylhet-3100, Bangladesh</P>
              </ListGroupItem>
              <ListGroupItem
                style={{ background: "transparent" }}
                className="border-0"
              >
                <Span>Phone: +821039450097</Span>
              </ListGroupItem>
              <ListGroupItem
                style={{ background: "transparent" }}
                className="border-0"
              >
                <Span>Email: aminjonovtoxirbek@gmail.com</Span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4>NewsLetter</h4>
            <ListGroup>
              <P>Subscribe our newsletter</P>
              <Input type="email" placeholder="Enter your email" />
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-5">
            <Col lg="6" md='6'>
                <P className="footer" style={{color: 'red', cursor:'pointer'}}>Copyright - 2023, website made by Tokhirbek Aminjonov. All Rights Reserved.</P>
            </Col>
            <Col lg="6" md='6'>
                <Social>
                   <P>Follow:</P>
                   <FacebookIcon style={{color: 'red'}}></FacebookIcon>
                   <GitHubIcon style={{color: 'red'}}></GitHubIcon>
                   <YouTubeIcon style={{color: 'red'}}></YouTubeIcon>
                   <InstagramIcon style={{color: 'red'}}></InstagramIcon>
                </Social>
            </Col>
        </Row>
      </Wrapper>
     
    </Container>
  );
};

export default Footer;
