import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 40px 131px;
  width: 100%;
  margin: auto;
  text-align: center;

  @media (max-width: 1280px) {
    padding: 0 116px;
  }

  @media (max-width: 1178px) {
    padding: 0 30px;
  }
  @media (max-width: 884px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 428px) {
    padding: 0 10px;
  }
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
    grid-template-columns: 1fr 1fr;
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

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  margin: auto;
  border: 1px solid none;
  background-color: #fde4e4;
  margin-bottom: 65px !important;
  margin-top: 45px !important;
`;

export const Input = styled.input`
  outline: none;
  height: 40px;
  padding-left: 25px;
  margin: 5px;
  width: 100%;
  border: none;
  line-height: 24px;
  border-bottom: 1px solid #212225;
  background-color: transparent;
  ::placeholder {
    color: black !important;
    font-size: 16px !important;
    background-color: #fde4e4 !important;
  }
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  width: 100px;
  background-color: #df2020;
  border-radius: 5px;
  margin-top: 40px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 568px){
     font-size: 14px;
     height: 30px;
     width: 90px;
  }
`;

export const Span = styled.span`
  padding: 20px 0;
  cursor: pointer;


  :hover {
    color: red;
  }

  @media (max-width: 428px){
    padding: 30px 0;
    margin-bottom: 30px;
    
  }
`;
