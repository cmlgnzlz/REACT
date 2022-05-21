import { useContext } from "react"
import { Link } from "react-router-dom"
import CartCard from "../components/CartCard"
import { cartContext } from "../context/cartContext"

const Cart = () => {

    const {cart, clearCart} = useContext(cartContext)

    return (
        <div className="text-center w-auto bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
                <div className="flex w-auto">
                    <div className="flex-initial basis-4/5 font-bold text-5xl mt-2 mb-2">
                        CARRITO DE COMPRAS
                    </div>
                    <div className="flex-initial basis-1/5 h-auto m-auto">
                        <button className="btn btn-outline-primary btn-lg" onClick={() => clearCart()}>Borrar Carrito</button>
                    </div>
                </div>
                <div className="w-auto">
                    { cart.length ?
                    <div>
                        <div className="flex w-auto h-auto flex-wrap mt-10 justify-center border-2 border-neutral-content p-20">
                            {cart.map( i => <CartCard key={i.item.id} data={i}/>)}
                        </div> 
                        <button className="btn btn-outline-primary btn-lg mt-10"><Link to={"/cart"}>Terminar compra</Link></button>
                    </div>
                    :
                    <div className="flex flex-col mt-10 mb-10 border-2 border-neutral-content p-20">
                        <h1 className="font-bold text-4xl mt-10 mb-10">No hay productos en el carrito</h1>
                        <button className="btn btn-outline-primary btn-lg"><Link to={'/'}>Volver a inicio</Link></button>
                    </div>
                    }  
                    
                </div>
        </div>

    )
}

export default Cart