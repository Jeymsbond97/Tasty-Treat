import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 80px 131px;
  width: 100%;
  margin: auto;

  @media(max-width: 1280px) {
    padding: 20px 106px;
  }

  @media(max-width: 1178px) {
    padding: 60px 50px;
  }
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
  
  & h2 {
      @media(max-width: 576px) {
         font-size: 1.6rem;
      }
    }
  & h5 {
      @media(max-width: 576px) {
         font-size: 1rem;
      }
    }

  & .text-center {
       
    @media(max-width: 576px) {
        margin-top: 2px;
    }


     & span{
        color: red;
    }
    
    & h5 {
      @media(max-width: 576px) {
         font-size: 1rem;
      }
    }
    & p{
      @media(max-width: 576px) {
         font-size: 0.9rem;
         margin-bottom: 0;
      }
    }

  }

  & .text-center

  & .lorem{
    color: #777;

    @media(max-width: 576px) {
        margin-button: 0;
      }
  }


`;