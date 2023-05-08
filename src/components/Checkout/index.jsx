import React from 'react'
import { Col, Row } from 'reactstrap'
import { useProductsContext } from '../../context/Products'
import { Section } from '../Register/style'
import { CheckoutBill, Form, Log, SectionH2, Wrapper } from './style'

const Checkout = () => {

    const [state] = useProductsContext();

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });


    return (
        <div>
            <Section>   
              <Log>
                 <SectionH2>Checkout</SectionH2>
              </Log>
            </Section>
            <section>
               <div>
                  <Wrapper  className="wrapper">
                     <Row>
                        <Col lg='8' md='6' className='mt-5'>
                            <h6 className='mb-4'>Shipping Address</h6>
                            <Form className="checkout_form">
                                <div className="form_group">
                                    <input type="text" placeholder=' Enter your name' required/>
                                </div>
                                <div className="form_group">
                                    <input type="email" placeholder=' Enter your email' required />
                                </div>
                                <div className="form_group">
                                    <input type="number" placeholder='Phone number' />
                                </div>
                                <div className="form_group">
                                    <input type="text" placeholder=' Country' />
                                </div>
                                <div className="form_group">
                                    <input type="text" placeholder=' City' />
                                </div>
                                <div className="form_group">
                                    <input type="number" placeholder=' Postal code' />
                                </div>
                                <button className='add_btn' type='submit'>Payment</button>
                            </Form>
                        </Col>
                        <Col lg='4' md='6'>
                            <CheckoutBill className='mt-5'>
                                <h6 className='d-flex mb-3 justify-content-between'>Subtotal:  <span>{formatter.format(state.cardItems.reduce((sum, current)=> sum + current.price*current.count, 0))}</span></h6>
                                <h6 className='d-flex mb-3 justify-content-between'>Shipping:  <span>$30</span></h6>
                                <div><h5   className='d-flex align-items-center justify-content-between'>Total: <span>{formatter.format(state.cardItems.reduce((sum, current)=> sum + current.price*current.count, 30))}</span></h5></div>
                            </CheckoutBill>
                        </Col>
                     </Row>
                  </Wrapper>
               </div>
            </section>
        </div>
    )
}

export default Checkout