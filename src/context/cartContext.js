import { createContext, useState } from "react";

export const cartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    isInCart: () => {}
})

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item,count) => {
        if (isInCart(item.id)){
            let index = cart.findIndex(i => i.item.id === item.id);
            let itemCart = cart[index];
            itemCart.count = itemCart.count + count;
            const newCart = [...cart];
            newCart.splice( index, 1, itemCart );
            setCart([ ...newCart ]);
        }
        else{
            let itemCart = {item,count}
            setCart([...cart, itemCart])
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