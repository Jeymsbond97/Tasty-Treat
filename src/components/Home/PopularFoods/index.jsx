import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useProductsContext } from "../../../context/Products";
import { Col, Row } from "reactstrap";
import { FoodName, Product, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";




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
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PopularFoods = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useProductsContext(); 
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Wrapper>
        <Row>
          <Col lg="12" className="text-center mt-5 mb-4">
            <FoodName className="FoodName">Popular Foods</FoodName>
          </Col>
          <Col lg='12'>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  background: "#df2020",
                  borderRadius: "8px",
                  height: "60px",
                  padding: "11px",
                  color: 'white'
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{ color: "white" }}
                  className= 'tabs_title'
                >
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Burger" {...a11yProps(1)} />
                  <Tab label="Pizza" {...a11yProps(2)} />
                  <Tab label="Bread" {...a11yProps(3)} />
                </Tabs>
              </Box>
            </Box>
          </Col>
          
        </Row>
        <Row>
        <TabPanel value={value} index={0}>
              {
                state.data.map((value)=>(
                   <Col key={value.id} lg='3' md='4' sm='6' xs='6' className="d-flex gap-5">
                    <Product className="product">
                        <div className="product_img">
                            <img src={value.image01} alt="img" className="w-50"/>
                        </div>
                        <div className="product_title">
                            <h5>
                               <p onClick={() => {navigate(`/foods/:${value.id}`) ; dispatch({
                                  type: "Add_To_Review", payload: { product: value },
                                    }) }
                                  }>
                                    {value.title}
                               </p>
                            </h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="price">${value.price}</span>
                            <button className="btn" onClick={()=>dispatch({type:'Add_To_Card', payload:{product:value}})}> Add to Card</button>
                        </div>
                    </Product>
                   </Col>
                ))
               }
              </TabPanel>
              <TabPanel value={value} index={1}>
              {
                state.data.filter((value)=>value.category.toLowerCase() === 'burger').map((value)=>(
                   
                    <Col key={value.id} lg='3' md='4' sm='6' xs='6'>
                    <Product className="product">
                        <div className="product_img">
                            <img src={value.image01} alt="img" className="w-50"/>
                        </div>
                        <div className="product_title">
                            <h5><p onClick={() => {navigate(`/foods/:${value.id}`) ; dispatch({
                                  type: "Add_To_Review", payload: { product: value },
                                    }) }
                                  }>
                                    {value.title}
                               </p></h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="price">${value.price}</span>
                            <button className="btn"  onClick={()=>dispatch({type:'Add_To_Card', payload:{product:value}})}> Add to Card</button>
                        </div>
                    </Product>
                   </Col>
                ))      
               }
              </TabPanel>
              <TabPanel value={value} index={2}>
              {
                state.data.filter((value)=>value.category.toLowerCase() === 'pizza').map((value)=>(
                   
                    <Col key={value.id} lg='3' md='4' sm='6' xs='6' >
                    <Product className="product "  >
                        <div className="product_img">
                            <img src={value.image01} alt="img" className="w-50"/>
                        </div>
                        <div className="product_title">
                            <h5>
                                <p onClick={() => {navigate(`/foods/:${value.id}`) ; dispatch({
                                  type: "Add_To_Review", payload: { product: value },
                                    }) }
                                  }>
                                    {value.title}
                               </p>
                            </h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="price">${value.price}</span>
                            <button className="btn"  onClick={()=>dispatch({type:'Add_To_Card', payload:{product:value}})}> Add to Card</button>
                        </div>
                    </Product>
                   </Col>
                ))      
               }
              </TabPanel>
              <TabPanel value={value} index={3}>
              {
                state.data.filter((value)=>value.category.toLowerCase() === 'bread').map((value)=>(
                   
                    <Col key={value.id} lg='3' md='4' sm='6' xs='6' >
                    <Product className="product"  >
                        <div className="product_img">
                            <img src={value.image01} alt="img" className="w-50"/>
                        </div>
                        <div className="product_title">
                            <h5>
                               <p onClick={() => {navigate(`/foods/:${value.id}`) ; dispatch({
                                  type: "Add_To_Review", payload: { product: value },
                                    }) }
                                  }>
                                    {value.title}
                               </p>
                            </h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="price">${value.price}</span>
                            <button className="btn"  onClick={()=>dispatch({type:'Add_To_Card', payload:{product:value}})}> Add to Card</button>
                        </div>
                    </Product>
                   </Col>
                ))      
               }
              </TabPanel>
                
        </Row>
      </Wrapper>
  )
};

export default PopularFoods;
