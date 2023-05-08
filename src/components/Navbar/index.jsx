import React, { useContext, useRef,useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../icons/images/logo1.png";
import { navbar } from "../../utils";
// import { FoodsPage } from "../../pages/FoodsPage";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";

// import { Drawer } from "antd";

import {
  Container,
  Nav,
  NavColumn,
  Wrapper,
  Logo,
  NavWrapper,
  NavTitle,
  NavUl,
  Icons,
  NavWrapperBox,
  Section,
} from "./style";
import { useMediaQuery } from "../../hook/useMediaQuery";
import NavMenu from "./NavManu";
import { NavMenuContext } from "../../context/NavMenu";
import CardDrawer from "../Cart/CardDrawer";
import { CardDrawerContext } from "../../context/CardDrawer";
import Footer from "../Footer";
import { useProductsContext } from "../../context/Products";
import './style.css'

const Navbar = () => {
  const navigate = useNavigate();
  let isPageWide = useMediaQuery("(max-width: 884px)");

  const [openNavMenu, setOpenNavMenu] = useContext(NavMenuContext);
  const [openCardDrawer, setCardDrawer] = useContext(CardDrawerContext);
  const [state] = useProductsContext(); 

  const headerRef = useRef()

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop >120 || document.documentElement.scrollTop > 120){
        headerRef.current.classList.add('header')
      }
      else{
        headerRef.current.classList.remove('header')
      }
    })
      return ()=> window.removeEventListener('scroll', null)
  }, [])

  return (
    <Container>
      <Section  ref={headerRef}>
      <Nav>
        <NavColumn>
          <NavWrapper>
            <NavWrapperBox>
              <Logo
                src={logo}
                alt="logo"
                loading="lazy"
                onClick={() => navigate("/home")}
              />
              <NavTitle>Testy Treat</NavTitle>
            </NavWrapperBox>
          </NavWrapper>
        </NavColumn>
        {!isPageWide && (
          <NavColumn>
            <NavUl>
              {navbar.map(
                (value) =>
                  !value?.hidden && (
                    <NavLink
                      key={value?.id}
                      to={value?.path}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "crimson" : "#212245",
                          fontWeight: isActive ? "700" : "600",
                          fontSize: "20px",
                        };
                      }}
                    >
                      {value?.title}
                    </NavLink>
                  )
              )}
            </NavUl>
          </NavColumn>
        )}

        <NavColumn>
          <Icons>
            <Stack spacing={2} direction="row">
              <Badge badgeContent={state.cardItems.length} color="secondary">
                <ShoppingBasketIcon
                  onClick={() => setCardDrawer(!openCardDrawer)}
                  color="action"
                />
              </Badge>
              <Badge>
                <PermIdentityIcon
                  onClick={() => navigate("/login")}
                  color="action"
                />
              </Badge>
              {isPageWide && (
                <MenuIcon
                  onClick={() => setOpenNavMenu(!openNavMenu)}
                  color="action"
                />
              )}
            </Stack>
          </Icons>
        </NavColumn>
      </Nav>
      </Section>
      <Wrapper>
        <CardDrawer />
        <NavMenu />
        
      </Wrapper>
        <Outlet />
        {/* <FoodsPage /> */}
        <Footer/>
    </Container>
  );
};

export default Navbar;
