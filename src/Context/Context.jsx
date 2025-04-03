import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }) => {

const [cart, setCart] = useState([])
const [favorites, setFavorites] = useState([])

const buyProducts = (product) => { 
    const existingProduct = cart.find(item => item.id === product.id)
    if (existingProduct) {
         const updatedCart = cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item )
         setCart(updatedCart)  
    } else {
    const newProduct = {...product, quantity: 1}     
    setCart([...cart, newProduct])
}     
} 

    return (
        <Context.Provider value={{cart, setCart, favorites, setFavorites, buyProducts}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider; 