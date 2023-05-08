import React, { createContext, useState } from 'react'

export const NavMenuContext = createContext();

const NavMenuContextProvider = ({children}) => {
   
    const [openNavMenu, setOpenNavMenu] = useState(false);

     return (
         <NavMenuContext.Provider  value={[openNavMenu, setOpenNavMenu]}>{children}</NavMenuContext.Provider>
     )
}

export default  NavMenuContextProvider;