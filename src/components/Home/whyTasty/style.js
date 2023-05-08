import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 10px 131px;
  width: 100%;
  margin: auto;

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
export const Content = styled.div`
   & h2 {

    @media(max-width: 576px) {
     font-size: 1.6rem;
  }
   }

   & span{
    color: #df2020;
   }

   & .lorem{
     line-height: 30px;
     color: #777;
    
   } 

   & p{
    color: #777;
    line-height:30px;

    @media(max-width: 576px) {
    font-size: 0.8rem;
  }
   }
`; 
export const Title = styled.div`
  padding: 5px 0;
  font-size: 1rem;
  font-weight: 600;
`;