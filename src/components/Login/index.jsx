import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Container, Form, Input, Button, Span, Section, Log , SectionH2} from "./style";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef()
  const passwordRef = useRef()

  const Login =(e)=> {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("user"))
     if(user?.email=== emailRef.current.value && user?.password === passwordRef.current.value) {
        const number = parseInt(Math.random()*1000000000000000)
        localStorage.setItem('tokenFoods', JSON.stringify(number.toString(16)))
     }  
  }


  return (
    <Container>
      <Section>
        {/* <Banner src={BgLogo} alt="Logo" loading="lazy" /> */}
        <Log>
          <SectionH2>Login</SectionH2>
        </Log>
      </Section>
      <Wrapper>
        <Form>
          <Input
            type="email"
            ref={emailRef}
            placeholder="Email"
            autoComplete="off"
            required
          />
          <Input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            autoComplete="off"
            required
          />
          <Button type="submit" onClick={Login}>Login</Button>
        </Form>
        <Span  onClick={() => navigate("/Register")}>
          Don't have an account? Create an account
        </Span>
      </Wrapper>
    </Container>
    
  );
};

export default Login;
