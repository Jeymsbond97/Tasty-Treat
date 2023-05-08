import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;

  @media(max-width: 428px) {
    padding: 10px 20px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 50px 131px;
  width: 100%;
  margin: auto;

  @media(max-width: 1280px) {
    padding: 0 116px;
  }

  @media(max-width: 1178px) {
    padding: 0 50px;
  }
  @media(max-width: 992px) {
    padding: 20px 40px;
  }
  @media(max-width: 767px) {
    padding: 0 100px;
  }
  @media(max-width: 428px) {
    padding: 30px 20px;
  }

`;

export const Buttons = styled.div`


@media(max-width: 768px) {
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 576px) {
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
   
  }

  @media(max-width: 428px) {
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
  }

`;


export const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 55px;

  @media(max-width: 768px) {
   font-size: 1.6rem;
   line-height: 40px;
  }

  @media(max-width: 576px) {
   font-size: 1.6rem;
   line-height: 40px;
   text-align: center;
  }

  @media(max-width: 428px) {
    font-size: 1.6rem;
    text-align: center;
    line-height: 40px;
  }
`;


export const Span = styled.span`
  color: #df2020;
`;
export const P = styled.p`
  color: #777;
  font-size: 1rem;
  line-height: 30px;
  font-weight: 400;


  @media(max-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
    line-height:25px;
  }

  @media(max-width: 576px) {
   line-height:25px;
   text-align: center;
   font-size: 0.9rem;
  }

  @media(max-width: 428px) {
    font-size: 0.9rem;
    text-align: center;
    line-height: 20px;
  }
`;

export const H5 = styled.h5`

@media(max-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
    line-height:25px;
  }

  @media(max-width: 576px) {
   line-height:25px;
   text-align: center;
  }

  @media(max-width: 428px) {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 0px;
  }

`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 7px 20px;
  border-radius: 5px;
  cursor: pointer;

  :hover{
    background-color: #6c757d;
    transition: all 0.3s;
    color: white;
  }
`;

export const MainDiv = styled.div`

`;

export const MainImg = styled.img`

`;