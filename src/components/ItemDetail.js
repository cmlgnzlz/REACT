import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { cartContext } from "../context/cartContext";
import ItemCount from "./ItemCount"


const ItemDetail = ({producto}) => {

  const {addItem} = useContext(cartContext)
  const [goCart, setGoCart] = useState(false)
  
  function handleOnAdd(count) {
    setGoCart(true);
    addItem(producto, count);
  }

  return (
    <>
    <div className="flex w-4/5 bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
        <img className="card-img-top"  src={producto.img} alt={producto.name}/>
        <div className="card text-center">
            <p className="font-bold text-3xl mt-2 mb-1 ">{producto.name}</p>
            <p className="font-bold text-xl mt-1 mb-1 text-white">{producto.desc}</p>   
            <p className="font-bold text-xl mt-1 mb-1 text-white">{producto.price}</p>
            <div className="m-auto align-center pb-4">
                { goCart ?
                  <Link to="/cart" className="btn btn-primar">Terminar compra</Link>
                    : 
                  <ItemCount stock={producto.stock} initial={1} onAdd={handleOnAdd}/>
                }
                <div>
                  <p>Apurate! Quedan {producto.stock}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default ItemDetail