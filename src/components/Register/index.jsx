import React, { useRef } from "react";
import {  useNavigate } from "react-router-dom";
import { Wrapper, Container, Input, Button, Span, Form, Log, Section, SectionH2} from "./style";

const Register = () => {
  const navigate = useNavigate();

  const fullNameRef = useRef()
  const emailRef = useRef()
  const passwordRef= useRef()

const Submit = (e)=> {
  e.preventDefault()
  const user = {
    fullName: fullNameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value,
  }
  localStorage.setItem('user', JSON.stringify(user))
  navigate('/login')
}

  return (
    <Container>
      <Section>   
        <Log>
          <SectionH2>Register</SectionH2>
        </Log>
      </Section>
      <Wrapper>
        <Form>
          <Input type="text"  ref={fullNameRef} placeholder="Full name" autoComplete="off" required />
          <Input type="email" ref={emailRef} placeholder="Email" autoComplete="off" required />
          <Input type="password" ref={passwordRef} placeholder="Password" autoComplete="off" required />
          <Button type="submit"  onClick={Submit}>Sign Up</Button>
        </Form>
        <Span onClick={() => navigate("/login")}>
          Already have an account? Login
        </Span>
      </Wrapper>
    </Container>
  );
};

export default Register;
