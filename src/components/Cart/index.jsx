import React from 'react'
import { Col, Row } from 'reactstrap';
import { useProductsContext } from '../../context/Products';
import { Section } from '../Register/style';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container, Log, SectionH2, Table, TotalInfo, Wrapper } from './style';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [state, dispatch] = useProductsContext(); 
    const navigate = useNavigate()

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        <Container>
           <Section>   
              <Log>
                 <SectionH2>Your Cart</SectionH2>
              </Log>
            </Section>
            <Wrapper>
              <Row>
                <Col lg='12'>
                   <Table className='table table-bordered mt-5 mb-5'>
                     <thead>
                       <tr>
                         <th>Image</th>
                         <th>Product Title</th>
                         <th>Price</th>
                         <th>Quantity</th>
                         <th>delete</th>
                       </tr>
                     </thead>
                     <tbody>
                        {
                            state.cardItems.map((value)=>{
                                return (
                                   <tr key={value.id}>
                                      <td className='img_cart'>
                                        <img src={value.image01} alt="avatar" className='table_img' />
                                      </td>
                                      <td >{value.title}</td>
                                      <td>${value.price}</td>
                                      <td>{value.count}px</td>
                                      <td className='delete'  onClick={()=>dispatch({type: 'Delete', payload:{id: value.id}})}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></td>
                                   </tr>
                                )
                            })
                        }
                     </tbody>
                   </Table>
                   <TotalInfo className="total_info">
                      <h6>Subtotal:   <span>{formatter.format(state.cardItems.reduce((sum, current)=> sum + current.price*current.count, 0))}</span></h6>
                      <p>Taxes and shipping will calculate at checkout</p>
                      <div className="total_btn">
                        <button className='food_btn'  onClick={()=>navigate('/foods')}>Continue Shopping</button>
                        <button  onClick={()=>navigate('/Checkout') }>Proceed to Checkout</button>
                      </div>
                   </TotalInfo>
                </Col>
              </Row>
            </Wrapper>
        </Container>
    )
}

export default Cart