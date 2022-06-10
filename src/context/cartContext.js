import { createContext, useContext, useState } from "react";

export const cartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    isInCart: () => {},
})

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item,count) => {
        if (isInCart(item.id)){
            let index = cart.findIndex(i => i.item.id === item.id);
            let itemCart = cart[index];
            itemCart.count = itemCart.count + count;
            itemCart.total = itemCart.item.price * itemCart.count;
            itemCart.total = itemCart.total.toFixed(2);
            itemCart.total = Number(itemCart.total);            
            const newCart = [...cart];
            newCart.splice( index, 1, itemCart );
            setCart([ ...newCart ]);
        }
        else{
            let itemCart = {item,count}
            itemCart.total = itemCart.item.price * itemCart.count;
            itemCart.total = itemCart.total.toFixed(2);
            itemCart.total = Number(itemCart.total);
            setCart([...cart, itemCart]);
            }
    }
    
    const removeItem =  (item) => { 
        const newCart = cart.filter(i => i.item.id !== item.id);
        setCart([ ...newCart ]);  
    }

    const clearCart = ( ) => { 
        setCart([])
    }

    const isInCart = (id) => { 
        return cart.some( (i) => i.item.id === id)
    }
  
    return (
        <cartContext.Provider value={{ cart,addItem,isInCart,clearCart,removeItem }}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider

export const SaveOrder = () => {
    return useContext(cartContext)
}