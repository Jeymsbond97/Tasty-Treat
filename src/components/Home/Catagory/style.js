import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 0 131px;
  width: 100%;
  margin: auto;

  @media(max-width:428px){
    padding: 0 0;
  }

  @media(max-width: 768px) {
    padding: 0 10px;
  }

  @media(max-width: 576px) {
    padding: 0 40px;
  }
`;

export const Main = styled.div`
  background-color: #fde4e4 ;
  padding: 30px 20px;
  border-radius: 7px;
  transition: 0.3s;
  cursor: pointer;

  :hover{
    transform: translateY(-15px); 
  }

    @media (max-width:991px) {
        padding:20px 10px;
        margin-bottom: 20px;
        
        & .img img{
        width: 45px;
      }

      & h6{
         font-size: 14px;
      }
    }

    @media(max-width: 768px) {
        padding:20px 10px;
        margin-bottom: 20px;    

      & h6{
         font-size: 14px;
      }
     }

    @media(max-width: 576px) {
        padding:20px 10px;
        margin-bottom: 20px;
        
        & .img img{
        width: 45px;
      }

      & h6{
         font-size: 14px;
      }
     }

    @media(max-width:428px) {
        padding:20px 10px;
        margin-bottom: 20px;
        
        & .img img{
        width: 45px;
      }

      & h6{
         font-size: 14px;
      }
    }

   
`;