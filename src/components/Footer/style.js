import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 background-color: #fde4e4;
 
`;

export const Wrapper = styled.div`
  max-width :1440px ;
  width: 100%;
  padding: 10px 131px;
  margin: auto;
  

  @media(max-width: 1280px) {
    padding: 10px 116px;
  }

  @media(max-width: 1178px){
    padding: 10px 30px;
  }

  @media(max-width: 992px) {
     padding: 20px;
  }
  @media(max-width: 768px) {
     padding: 20px 20px;

     & .mb-5 h4{
       font-size: 14px;
       font-weight: 600;
    }
  }
  @media(max-width: 576px) {
     padding: 30px 20px;

     & .mb-5 h4{
       font-size: 15px;
       font-weight: 600;
    }
  }
  @media(max-width: 428px) {
    padding: 20px 10px;
    
    & .mb-5 h4{
       font-size: 15px;
       font-weight: 600;
    }
    
  }

`; 
export const Span = styled.span`
 font-weight: 600;
 font-size: 16px;

  @media(max-width:768px){
    font-size: 13px;
  }
  @media(max-width:576px){
    font-size: 13px;
  }

  @media(max-width:428px){
    font-size: 13px;
  }

`;

export const P = styled.p`
  color: black;
  font-weight: 500;

  @media(max-width: 768px) {
    font-size: 13px;
     
    &.footer{
         font-size: 14px;
         text-align: left;
    }
  }
  @media(max-width: 576px) {
     font-size: 13px;
     
    &.footer{
         font-size: 15px;
         text-align: center;
    }
  }
  @media(max-width: 428px) {
       font-size: 13px;

    &.footer{
         font-size: 13px;
         text-align: center;
    }
  }
`;

export const LogoLorem = styled.p`
  color: #333;
  font-size: 15px;
  margin-top: 15px;

  @media(max-width: 768px) {
   font-size: 13px;
  }
  @media(max-width: 576px) {
   font-size: 13px;
  }
  @media(max-width: 428px) {
   font-size: 13px;
  }
`;

export const Logo = styled.img`
  width: 60px;

  @media(max-width: 758px) {
    width: 50px;
  }

  @media(max-width: 428px) {
    width: 70px;
  }

`;
export const NewsLetter = styled.input`
  padding: 7px 25px;
  border: 1px solid #212245;
`;
export const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  background-color: #fde4e4 !important;
  border: 1px solid black;
  padding-left: 10px;
  margin-top: 10px;
  outline: none;

  ::placeholder {
    color: black !important;
    font-size: 16px !important;
    background-color: #fde4e4 !important;
  }

`;

export const Social = styled.div`
  display: flex;
  gap: 25px;
  justify-content: end;
  
`;