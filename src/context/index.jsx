import React from "react";
import CardDrawerProvider from "./CardDrawer";
import NavMenuContextProvider from "./NavMenu";
import ProductsContextProvider from "./Products";

const Context = ({ children }) => {
  return (
    <NavMenuContextProvider>
      <CardDrawerProvider>
        <ProductsContextProvider>{children}</ProductsContextProvider>
      </CardDrawerProvider>
    </NavMenuContextProvider>
  );
};

export default Context;
