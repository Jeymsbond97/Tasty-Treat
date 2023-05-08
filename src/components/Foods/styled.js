import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
`;
export const Section = styled.section`
  width: 100%;
  background-color: #fde4e4;
  
`;

export const Log = styled.div`
 max-width: 1440px;
  padding: 0 131px;
  width: 100%;
  margin: auto;

  @media (max-width: 1280px) {
    padding: 0 116px;
  }

  @media (max-width: 1178px) {
    padding: 0 30px;
  }
  @media (max-width: 884px) {
  }
  @media (max-width: 428px) {
    padding: 0 10px;
  }
`;

export const SectionH2 = styled.h2`
  padding: 80px 0;

  @media (max-width: 325px){
    padding: 30px;
    
  }
  @media (max-width: 375px){
    padding: 30px;
    font-size: 1.7rem;
  }
  @media (max-width: 768px){
    padding: 40px;
    font-size: 1.7rem;
  }
  @media (max-width: 992px){
    padding: 40px;
    font-size: 1.7rem;
  }
`;
 
// style for search

export const Search = styled.div`
    
    & .search{
      width: 100%;
      padding: 7px 25px;
      border: 1px solid #fde4e4;
      cursor: pointer;
      border-radius: 5px;
      outline: none;
    }

`;

export const Select = styled.select`
   width: 50%;
   padding: 7px 25px;
   border: 1px solid #fde4e4;
   cursor: pointer;
   border-radius: 5px;
   outline: none;
  
   @media(max-width: 768px){
    width: 100%;
   }
`;

export const Wrapper = styled.div`
    max-width: 1440px;
    padding: 50px 131px  ;
    width: 100%;
    margin: auto;
    box-sizing: border-box;

    @media(max-width: 992px) {
    padding: 40px 20px;
  }

  @media(max-width: 768px) {
    padding: 40px 10px;
  }

  @media(max-width: 576px) {
    padding: 40px 40px;
  }

  @media(max-width: 428px) {
    padding: 30px 5px;
  }
  
`; 

export const Product = styled.div`
  border: 1px solid #fde4e4;
  text-align: center;
  padding:30px;
  cursor: pointer;
  
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
  `