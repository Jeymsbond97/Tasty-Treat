import { createContext, useContext, useReducer } from "react";
import products from "../../utils/products";
import {reducer} from '../Products/reducer'

const ProductsContext = createContext()

export const useProductsContext = ()=> useContext(ProductsContext)

const initialState = JSON.parse(localStorage.getItem('data')) || {
    data: products,
    cardItems: [],
    wishlist: []
}

const ProductsContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState )
    localStorage.setItem('data', JSON.stringify(state))
   
    return (
        <ProductsContext.Provider  value={[state, dispatch]}>
           {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider