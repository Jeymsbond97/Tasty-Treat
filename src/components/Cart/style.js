import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
`;

export const Log = styled.div`
 max-width: 1440px;
  padding: 0 131px;
  width: 100%;
  margin: auto;

  @media(max-width: 1178px) {
    padding: 20px 30px;
  }
  @media(max-width: 992px) {
    padding: 20px 30px;
  }

  @media(max-width: 768px) {
    padding: 20px 30px;
  }

  @media(max-width: 576px) {
    padding: 20px 40px;
  }

  @media(max-width: 428px) {
    padding: 20px 15px;
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

export const Wrapper = styled.div`
 max-width: 1440px;
   padding: 10px 131px;
   width: 100%;
   margin: auto;

  @media(max-width: 1178px) {
    padding: 20px 30px;
  }
  @media(max-width: 992px) {
    padding: 20px 30px;
  }

  @media(max-width: 768px) {
    padding: 20px 30px;
  }

  @media(max-width: 576px) {
    padding: 20px 40px;
  }

  @media(max-width: 428px) {
    padding: 20px 15px;
  }
  @media(max-width: 375px) {
    padding: 20px 5px;
  }
   
`;

export const Table = styled.table`
   
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
    text-align: center;

   & thead{
    border-bottom: 2px solid #212529;
   }

   & .img_cart{
    width: 80px;
   }

   & .table_img{
    width: 65px;
   }

   & td {
     font-weight: 500;
     
   }

   & .delete{
    cursor: pointer;
   }
`;

export const TotalInfo = styled.div`
    
    margin-bottom: 25px;
    
    & span{
        color: #df2020;
        font-size: 1.5rem;
    }

    & .food_btn{
        margin-right: 20px;
    }

    & button{
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

       @media(max-width: 768px) {
        padding: 5px 20px;
       }

       @media(max-width: 568px) {
        padding: 5px 12px;
       }

       @media(max-width: 375px) {
        padding: 5px 12px;
       }
   }
`;