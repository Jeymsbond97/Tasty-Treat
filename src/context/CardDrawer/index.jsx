import React, { createContext, useState } from 'react'

export const CardDrawerContext = createContext();

const CardDrawerProvider = ({children}) => {
   
    const [openCardDrawer, setCardDrawer] = useState(false);

     return (
         <CardDrawerContext.Provider  value={[openCardDrawer, setCardDrawer]}>{children}</CardDrawerContext.Provider>
     )
}

export default CardDrawerProvider;