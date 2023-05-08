import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 border: 1px solid black;
`;
export const Section = styled.div`
  width: 100%;
  height: 100px;
  line-height: 100px;
`;
export const Nav = styled.div`
  max-width :1440px ;
  width: 100%;
  padding: 10px 131px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  
  @media(max-width: 1280px) {
    padding: 0 116px;
  }

  @media(max-width: 1178px) {
    padding: 10px 30px;
  }
  @media(max-width: 884px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 428px) {
    padding: 10px 20px;
  }

`; 


export const NavColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
`;

export const NavWrapperBox = styled.div`
   display: flex;
   flex-direction:column;
   align-items: center;
   width: fit-content;
   
`;

export const NavTitle = styled.h4`
  
  @media(max-width: 758px) {
    font-size: 18px;
  }

  @media(max-width: 428px) {
     font-size: 16px;
  }
`;

export const Logo = styled.img`
  width: 50px;

  @media(max-width: 992px) {
    width: 50px;
  }
  @media(max-width: 758px) {
    width: 50px;
  }

  @media(max-width: 428px) {
    width: 40px;
  }

`;

export const NavUl = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   gap: 20px;
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;


export const Wrapper = styled.div`
  max-width: 1440px ;
  width: 100%;
  padding: 0 131px;
  margin: auto;

  @media(max-width: 1280px) {
    padding: 0 116px;
  }
`;