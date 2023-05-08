import React from "react";
import {Row, Col} from "reactstrap";
import FastFood from '../../../icons/1.png'
import Pizza from '../../../icons/2.png'
import Asian from '../../../icons/3.png'
import RowMeat from '../../../icons/4.png'
import { Wrapper } from "../style";
import { Main } from "./style";

const data =[
    {
        id: 1,
        img: FastFood ,
        display: 'FastFood'
    },
    {
        id: 2,
        img: Pizza ,
        display: 'Pizza'
    },
    {
        id: 3,
        img: Asian ,
        display: 'Asian Food'
    },
    {
        id: 4,
        img: RowMeat,
        display: 'Row Meat'
    }
]

const Category = ()=> {
    return (
       <Wrapper>
           <Row className="mt-5 mb-3 d-flex">
            {
                data.map((value)=>(
                    <Col lg="3" md='4' sm='6' xs='6' key={value.id} >
                        <Main className="d-flex align-items-center gap-3" >
                            <div className="img">
                              <img src={value.img} alt="logo" />    
                            </div>
                            <h6>{value.display}</h6>
                        </Main>
                    </Col>
                ))
            }
           </Row>
       </Wrapper>
    )
}

export default Category;