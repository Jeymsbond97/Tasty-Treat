import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
`;


export const Wrapper = styled.div`
    max-width: 1440px;
    padding: 30px 131px;
    width: 100%;
    margin: auto;

    @media(max-width: 1178px) {
    padding: 20px 30px;
  }
  @media(max-width: 992px) {
    padding: 20px 30px;
  }

  @media(max-width: 768px) {
    padding: 20px 30px;
  }

  @media(max-width: 576px) {
    padding: 20px 40px;
  }

  @media(max-width: 428px) {
    padding: 20px 15px;
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


export const Log = styled.div`
 max-width: 1440px;
  padding: 0 131px;
  width: 100%;
  margin: auto;

  @media(max-width: 1178px) {
    padding: 20px 30px;
  }
  @media(max-width: 992px) {
    padding: 20px 30px;
  }

  @media(max-width: 768px) {
    padding: 20px 30px;
  }

  @media(max-width: 576px) {
    padding: 20px 40px;
  }

  @media(max-width: 428px) {
    padding: 20px 15px;
  }
  @media(max-width: 375px) {
    padding: 20px 15px;
  }
   
`;

export const Option = styled.div`
     
     @media(max-width: 375px){
      text-align: center;
     }
     @media(max-width: 768px){
      text-align: center;
     }

    & img{
      width: 100px;
      cursor: pointer;
      margin-bottom: 15px;

      @media(max-width: 568px){
        width: 25%;
      }
      @media(max-width: 375px){
        width: 25%;
      }
    }

      @media(max-width: 375px) {
      padding: 20px 15px;
    }
      @media(max-width: 768px) {
       padding: 20px 30px;
       align-items: center;
   }
   
`;

 export const MainImg = styled.div`
    @media(max-width: 768px){
      text-align: center;
      align-items: center;
    }
   & .main_image{
    @media(max-width: 375px) {
    padding: 20px 15px;
    width: 50%;
    }
   }
   @media(max-width: 767px) {
    width: 50%;
    padding: 20px 15px;
    }
   @media(max-width: 375px) {
    width: 50%;
    padding: 20px 15px;
    }
   
 `;

export const SingleProduct = styled.div`
    padding-left: 50px;

    & h2{
    
      @media(max-width: 375px){
        font-size: 1.6rem;
        padding-left: 0px;
      }
      @media(max-width: 992px){
        font-size: 1.6rem;
        padding-left: 0px;
      }
    }

    & p{
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        gap: 15px;
        align-items: center;

        @media(max-width: 375px){
        font-size: 1.1rem;
         
        }
         @media(max-width: 992px){
         font-size: 1.1rem;
      }
    }

    &  span{
      color: #df2020;
      font-size: 1.7rem;

      @media(max-width: 375px){
        font-size: 1.3rem;
         
        }
         @media(max-width: 992px){
         font-size: 1.3rem;
      }
    }

    & .single_btn{
    border: none;
    border-radius: 5px;
    padding: 7px 25px;
    background-color: #df2020;
    color: #fff;
    font-size: 0.9rem;
    transition: 0.3s;

    :hover{
        color: #df2020;
        background-color: #212245;
    }
    @media(max-width: 992px) {
      font-size: 0.7rem;
      padding: 5px 15px;
  }
  }
`;

export const H2 = styled.h2`

    @media(max-width: 568px) {
      font-size: 1.7rem;  
    }
    @media(max-width: 428px) {
      font-size: 1.6rem;
      
  }
`;

export const Products = styled.div`
   border: 1px solid #fde4e4;
  text-align: center;
  padding:30px;
  cursor: pointer;
  margin-bottom:15px;

  @media(max-width: 992px) {
   padding: 20px;
  }

  & .product_img{
    margin-bottom: 20px;
    transition: 0.4s;

    :hover{
        transform: scale(1.3);
    }
  }

  & .product_title a{
     color:#212245;
     font-size: 1rem;
  }

  & .product_title h5{
     margin-bottom: 30px;

     @media(max-width: 992px) {
       font-size: 0.8rem;
    }
  }
  & .price{
    font-weight: 600;
    color: #df2020;
    font-size: 1.2rem;

    @media(max-width: 1178px) {
      font-size: 1.1rem;
    } 
    @media(max-width: 992px) {
      font-size: 1.1rem;
   }
    @media(max-width: 375px) {
      font-size: 1rem;
   }
  }

  & .btn{
    border: none;
    border-radius: 5px;
    padding: 7px 25px;
    background-color: #df2020;
    color: #fff;
    font-size: 0.9rem;
    transition: 0.3s;

    :hover{
        color: #df2020;
        background-color: #212245;
    }
    @media(max-width: 992px) {
      font-size: 0.7rem;
      padding: 5px 15px;
    }
    @media(max-width: 375px) {
      font-size: 0.6rem;
      padding: 5px 10px;
    }
  }
`;

export const Description = styled.div`
    
    & p{
        line-height: 30px;
        color: #777;
        padding: 20px 0;
        
        @media(max-width: 992px) {
        font-size: 0.9rem;
        padding: 5px 15px;
        }
       @media(max-width: 375px) {
          font-size: 0.8rem;
          padding: 5px 10px;
          line-height: 20px;
        }

      }
`;

export const Form = styled.div`
    width: 60%;
    margin: auto;
    background: #fde4e4;
    padding: 20px;
    border-radius: 5px;

    & .form_group{
        margin-bottom: 30px;
    }

    & input{
        width: 100%;
        background: transparent;
        padding: 7px 20px;
        border: none;
        border-bottom: 1px solid #777;  
    }
    
    & textarea {
        width: 100%;
        background: transparent;
        padding: 7px 20px;
        border: none;
        border-bottom: 1px solid #777;
    }

    & .btn_submit{
        border: none;
    border-radius: 5px;
    padding: 7px 25px;
    background-color: #df2020;
    color: #fff;
    font-size: 0.9rem;
    transition: 0.3s;

    :hover{
        color: #df2020;
        background-color: #212245;
      }
      @media(max-width: 992px) {
      font-size: 0.7rem;
      padding: 5px 15px;
      }
    }
`;