import React from "react";
import { Col, Row } from "reactstrap";
import { FoodName, Product, Wrapper } from "./style";
import {  useNavigate } from "react-router-dom";
import { useProductsContext } from "../../../context/Products";


const HotPizza = ()=>{
    const [state, dispatch] = useProductsContext();
    const navigate = useNavigate()

    const pizza = state.data.filter((value)=> value.category.toLowerCase()==='pizza')

    const SortPizza = pizza.filter((value, index)=> index < 4 )
    console.log(pizza)
       
    return(
        <Wrapper>
            <Row>
                <Col lg='12' className="text-center mb-5 foodName"><FoodName>Hot Pizza</FoodName></Col>
                {
                SortPizza.map((value)=>(
                   <Col key={value.id}lg='3' md='4' sm='6' xs='6' >
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
            </Row>
        </Wrapper>
    )
}
 
export default HotPizza