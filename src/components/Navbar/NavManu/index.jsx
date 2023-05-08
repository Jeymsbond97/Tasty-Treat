import React, { useContext } from "react";
import { Drawer } from "antd";
import { NavMenuContext } from "../../../context/NavMenu";
import  {navbar} from "../../../utils"
import { NavLink } from "react-router-dom";
import { Container } from "./style";

const NavMenu = () => {
  const [openNavMenu, setOpenNavMenu] = useContext(NavMenuContext);


  const onClose = () => {
    setOpenNavMenu(false);
  };

  return (
    <Drawer
      
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={openNavMenu}>
    
        <Container>
             {navbar.map(
                (value) =>
                  !value?.hidden && (
                    <NavLink onClick={()=> setOpenNavMenu(!openNavMenu)}
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
        </Container>
    </Drawer>
  );
};

export default NavMenu;
