import styled from "styled-components";

export const Content = styled.div`
   
   & h5 {
      @media(max-width: 576px) {
       font-size: 1rem;
    }
   }

   & .lorem{
    color: #777;
    line-height: 30px;
   }

   & .gap-3{
      margin-top: 15px;
   }

   & img{
    border-radius: 5px;
    width: 70px;
   }

`;