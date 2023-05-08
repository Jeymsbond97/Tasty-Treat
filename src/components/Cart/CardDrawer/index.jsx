import React, { useContext } from "react";
import { Drawer } from "antd";
import { CardDrawerContext } from "../../../context/CardDrawer";
import { useProductsContext } from "../../../context/Products";
import { Col, ListGroupItem, Row } from "reactstrap";
import './style.css'
import {  useNavigate} from "react-router-dom";







const CardDrawer = () => {
  const [openCardDrawer, setCardDrawer] = useContext(CardDrawerContext);
  const [state, dispatch] = useProductsContext(); 
  const navigate = useNavigate()
  

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const onClose = () => {
    setCardDrawer(false);
  };

  return (
    <Row className="row">
      <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={openCardDrawer}
    >
      <div className="all_items_info">
      {
        state.cardItems.map((product)=>(      
          <Col lg='12' key={product.id} className='Content'>
             <ListGroupItem className="border-0 ">
                 <div className="card_info d-flex gap-2">
                    <img src={product.image01} alt="images" className="d-flex "/>
                    <div className="items_info ">
                      <div className="item_info  ">
                         <h6>{product.title}</h6>
                         <p className="d-flex align-items-center gap-4"> {product.count}x   <span className="price">   {formatter.format(product.price*product.count)}</span></p>
                         <div className="item_buttons d-flex gap-4 align-items-center justify-content-center">
                           <button className="minus" onClick={()=>dispatch({type: "Minus", payload:{id:product.id}})}>-</button>
                           <span>{product.count}</span>
                           <button className="plus" onClick={()=>dispatch({type: "Plus", payload:{id:product.id}})}>+</button>
                         </div>
                      </div>
                    </div>
                    <button className="delete" onClick={()=>dispatch({type: 'Delete', payload:{id: product.id}})}>x</button>
                 </div>
             </ListGroupItem>
             
          </Col>
        ))
      }
      </div>
      <div className="checkout">
         <h6>SubTotal price : <span>{formatter.format(state.cardItems.reduce((sum, current)=> sum + current.price*current.count, 0))}</span> </h6>
          <button onClick={()=> {navigate('/Checkout'); setCardDrawer(!openCardDrawer) }} className="btn_checkout">Checkout</button>
       </div>
      
    </Drawer>
    </Row>
  );
};

export default CardDrawer;
