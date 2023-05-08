import styled from "styled-components"


export const Wrapper = styled.div`
    max-width: 1440px;
    padding: 30px 131px;
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
`; 

export const Content = styled.div`
   padding: 10px 0;
   
   & h2 {
    @media(max-width: 576px) {
    font-size: 1.6rem;
    }
  }
   & h5 {
    @media(max-width: 576px) {
    font-size: 1.3rem;
  }

   }
    
   & span{
    color: #df2020;
   }

   & p{
    color: #777;

    @media(max-width: 576px) {
    font-size: 0.8rem;
  }
   }
`;