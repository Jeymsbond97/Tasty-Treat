import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { useProductsContext } from '../../context/Products';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Section } from '../Register/style';
import { Container, Log, SectionH2, Wrapper, Products, SingleProduct, Form, Description, Option, MainImg, H2 } from './style'




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  



const Product = () => {

    const [value, setValue] = useState(0);
     const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const navigate = useNavigate()
    const [state, dispatch] = useProductsContext();
    const params =useParams()

    const product = state.data.filter((value)=> value.id === params.id.replace(':' , ''))[0]
    console.log(product)
    const like = state.data.filter((value)=> value.category === product.category)

    const option =like.filter((value, index)=> index < 3 )
    // console.log(like)


    return (
        <Container>
            <Section>   
              <Log>
                 <SectionH2>{product.title}</SectionH2>
              </Log>
            </Section>
           <Wrapper>
              <Row>
                  <Col md='2' lg='2'>
                    <Option className="title_images">
                        <div className="single_image">
                           {
                             option.map((value)=>(
                                <img src={value.image01} alt="avatar" />
                              ))
                           } 
                        </div>
                    </Option>
                  </Col>
                  <Col md='4' lg='4'>
                       <MainImg className="main_image">
                         <img src={product.image01} alt="avatar" className='w-100' />
                       </MainImg>
                  </Col>
                  <Col md='6' lg='6' >
                    <SingleProduct className="product_info">
                        <h2 className='mb-4'>{product.title}</h2>
                        <p className='price'>Price:  <span>${product.price}</span></p>
                        <p className='category'>Category:  <span> {product.category}</span></p>
                        <button className='single_btn mt-4' onClick={()=>dispatch({type:'Add_To_Card', payload:{product}})}  >Add to Cart</button>
                    </SingleProduct>
                  </Col>
                  <Col lg='12'  className='mt-5'>
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                       <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                         <Tab label="Description" {...a11yProps(0)} />
                         <Tab label="Review" {...a11yProps(1)} />
                       </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                          <Description >
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.</p>
                          </Description>
                    </TabPanel>
                   <TabPanel value={value} index={1}>
                        <div className="forms_info">
                            <div className="review">
                                <p className='mb-0 f-bold' style={{fontWeight: '600'}}>Mr. Jaymes</p>
                                <p style={{fontSize:'0.8rem'}}>jeymes@gmail.com</p>
                                <p style={{color: '#777'}}>Good Service </p>
                            </div>
                            <div className="review">
                                <p className='mb-0 f-bold' style={{fontWeight: '600'}}>Mandera</p>
                                <p style={{fontSize:'0.8rem'}}>mandera@gmail.com</p>
                                <p style={{color: '#777'}}>Best quality product in the world </p>
                            </div>
                            <div className="review">
                                <p className='mb-0 f-bold' style={{fontWeight: '600'}}>Jhon Alex</p>
                                <p style={{fontSize:'0.8rem'}}>jhon@gmail.com</p>
                                <p style={{color: '#777'}}>Great Product I saw </p>
                            </div>
                            <Form className="form  mt-5 mb-5">
                                <div className="form_group">
                                    <input type="text" placeholder='Enter your name' required />
                                </div>
                                <div className="form_group">
                                    <input type="email" placeholder='Enter your email' required />
                                </div>
                                <div className="form_group">
                                    <textarea type='text' rows="5" placeholder='Write your review'></textarea>
                                </div>
                                <button type='submit' className='btn_submit'>Submit</button>
                            </Form>
                            
                        </div>
                   </TabPanel>
                  </Box>
                  </Col>
                  <Col lg='12' className='mb-5 mt-4'> 
                     <H2>You might also like</H2>
                  </Col>
                  {
                    like.map((value)=>(
                     <Col key={value.id}lg='3' md='4' sm='6' xs='6' >
                       <Products className="product">
                         <div className="product_img">
                             <img src={value.image01} alt="img" className="w-50"/>
                         </div>
                         <div className="product_title">
                            <h5>
                                <p onClick={()=> {navigate(`/foods/:${value.id}`) ; dispatch({type: "Add_To_Review", payload: {product: value}})}}>{value.title}</p>
                            </h5>
                         </div>
                         <div className="d-flex align-items-center justify-content-between">
                            <span className="price">${value.price}</span>
                            <button className="btn" onClick={()=>dispatch({type:'Add_To_Card', payload:{product:value }})}> Add to Card</button>
                        </div>
                       </Products>
                     </Col>
                    ))
                  }
              </Row>
           </Wrapper>
        </Container>
    )
}

export default Product