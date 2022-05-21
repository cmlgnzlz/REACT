import { useContext } from "react";
import { Link } from "react-router-dom"
import { cartContext } from '../context/cartContext';
import ItemCount from "./ItemCount"

const ItemCard = ( {data} ) => {

    const {addItem} = useContext(cartContext)
    
    function handleOnAdd(count) {
        addItem(data, count);
        }

    return(
        <div className="card text-center w-96 bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
            <img src={data.img} alt={data.name}/>
            <div>
                <p className="font-bold text-3xl mt-2 mb-2">{data.name}</p>
                <p className="font-bold text-xl mt-2 mb-2 text-white">${data.price}</p>
                <div className="m-auto justify-center">
                    <Link to={`/productos/${data.id}`}><button className="btn btn-primar">Más detalles</button></Link>
                    <ItemCount stock={data.stock} initial={1} onAdd={handleOnAdd}/>
                    <p>Apurate! Quedan {data.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard


