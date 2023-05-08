import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 10px 131px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;

  @media(max-width: 992px) {
    padding: 0 20px;
  }

  @media(max-width: 768px) {
    padding: 0 10px;
  }

  @media(max-width: 576px) {
    padding: 0 40px;
  }

  @media(max-width: 428px) {
    padding: 0 5px;
  }
`
export const FoodName = styled.h1`
  
  @media(max-width: 576px) {
   font-size: 1.6rem;
  }
`;


export const Product = styled.div`
  border: 1px solid #fde4e4;
  text-align: center;
  padding:30px;
  cursor: pointer;
  margin: 8px;

  @media(max-width: 992px) {
   padding: 10px;
  }

  & .product_img{
    margin-bottom: 20px;
    transition: 0.4s;

    :hover{
        transform: scale(1.3);
    }
  }

  & .product_title p{
     color:#212245;
     font-size: 1rem;

     @media(max-width: 992px) {
       font-size: 0.8rem;

    }
  }

  & .product_title h5{
     margin-bottom: 30px;
    
  }
  & .price{
    font-weight: 600;
    color: #df2020;
    font-size: 1.2rem;

    @media(max-width: 992px) {
      font-size: 1.1rem;
   }
   @media(max-width: 576px) {
      font-size: 1rem;
   }
  }

  & .btn{
    border: none;
    border-radius: 5px;
    padding: 7px 25px;
    background-color: #df2020;
    color: #fff;
    font-size: 0.9rem;
    transition: 0.3s;

    :hover{
        color: #df2020;
        background-color: #212245;
    }

    @media(max-width: 992px) {
      font-size: 0.7rem;
      padding: 5px 15px;
  }
    @media(max-width: 576px) {
      font-size: 0.6rem;
      padding: 5px 10px;
  }
  }
`;
