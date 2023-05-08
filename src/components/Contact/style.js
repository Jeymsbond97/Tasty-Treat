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
    padding: 0 116px;
  }

  @media(max-width: 1178px) {
    padding: 0 30px;
  }
  @media(max-width: 884px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 428px) {
    padding: 0 10px;
  }

`; 
export const Span = styled.span`
 font-weight: 600;
 font-size: 16px;

`;

export const P = styled.p`
  color: black;
  font-weight: 500;
`;

export const LogoLorem = styled.p`
  color: #333;
  font-size: 15px;
  margin-top: 15px;
`;

export const Logo = styled.img`
  width: 60px;

  @media(max-width: 758px) {
    width: 50px;
  }

  @media(max-width: 428px) {
    width: 40px;
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