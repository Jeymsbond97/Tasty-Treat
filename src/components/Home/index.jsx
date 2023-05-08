import React from 'react'
import { Col, Row } from 'reactstrap'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import GppGoodIcon from '@mui/icons-material/GppGood';
import BgImg from '../../icons/images/mainBg.jpg'
import { Button, Buttons, Container, H1, H5, MainDiv, MainImg, P, Span, Wrapper } from './style'
import { Link } from 'react-router-dom';
import Category from './Catagory';
import Service from './Service';
import PopularFoods from './PopularFoods';
import WhyTasty from './whyTasty';
import HotPizza from './HotPizza';
import Testmonial from './Testimonial.jsx';

const Home = () => {
    return (
        <Container>
           <Wrapper>
             <Row>
                <Col lg="6" md='6'>
                    <Buttons className='pt-5' >
                      <H5 className='mb-3'>Easy way to make an order</H5>
                      <H1 className='mb-4'><Span>HUNGRY?</Span> Just wait <br/> food at<Span> your door
                      </Span></H1>
                      <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</P>

                      <div  className='d-flex align-items-center gap-5 mt-4'>
                        <Button style={{color: 'white', background:'#df2020'}} className='d-flex align-items-center justify-content-between'>Order now<ArrowForwardIcon></ArrowForwardIcon> </Button>
                        <Button style={{background:'transparent', border: '1px solid #df2020', color: '#df2020'}} ><Link to="/foods"> See all foods</Link></Button>
                      </div>
                      <div className='d-flex gap-5 mt-5 align-items-center'>
                        <span className='d-flex gap-2 justify-content-center'><DriveEtaIcon style={{color: 'red'}}></DriveEtaIcon>No shopping charge</span>
                        <span className='d-flex gap-2 justify-content-center'><GppGoodIcon style={{color: 'red'}}></GppGoodIcon>100% secure checkout</span>
                      </div>
                    </Buttons>
                </Col>
                <Col  lg="6" md='6' >
                    <MainDiv>
                        <MainImg src={BgImg} alt="Main Img" className='w-100' />
                    </MainDiv>
                </Col>
             </Row>
             
           </Wrapper> 
           <Category/>
           <Service/>
           <PopularFoods/>
           <WhyTasty/>
           <HotPizza/>
           <Testmonial/>
        </Container>
    )
}

export default Home