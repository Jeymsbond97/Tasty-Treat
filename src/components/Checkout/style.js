import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   box-sizing: border-box;
   padding: 0;
   margin: 0;
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
   
`;



export const Form = styled.form`
    padding-bottom: 60px;


    & .form_group input{
      width: 100%;
      border: none;
      padding: 7px 20px;
      margin-bottom: 30px;
      outline: none;
      background-color: transparent;
      border-bottom: 1px solid #777;

      @media(max-width: 768px) {
        /* padding: 5px 20px; */
        font-size: 0.9rem;
        border-bottom: 0.3px solid #777;
      }
    }

    & .add_btn{
      border: none;
      border-radius: 5px;
      padding: 7px 25px;
      background-color: #df2020;
      color: #fff;
      font-size: 0.7rem;
      transition: 0.3s;

       :hover{
        color: #df2020;
        background-color: #212245;
      }

      @media(max-width: 768px) {
        padding: 5px 20px;
      }
    }
`;

export const CheckoutBill = styled.div`
    padding: 30px;
    background-color: #fde4e4;

    @media(max-width: 768px) {
        margin-bottom: 30px;
      }
    
    & h6{
      font-size: 1rem;
      font-size: 500;
      line-height: 1.2;

      @media(max-width: 768px) {
        font-size: 0.9rem;
      }
    }


    & div{
      padding-top: 30px;
      border-top: 1px solid #ddd;
      font-family: "RocknRoll One",sans-serif !important;
    }
`;