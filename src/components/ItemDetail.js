import { Link } from "react-router-dom"


const ItemDetail = ({producto}) => {
  return (
    <div className="flex w-4/5 bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
        <img className="card-img-top"  src={producto.img} alt={producto.name}/>
        <div className="card text-center">
            <p className="font-bold text-3xl mt-2 mb-2 ">{producto.name}</p>
            <p className="font-bold text-xl mt-2 mb-2 text-white">{producto.desc}</p>   
            <p className="font-bold text-xl mt-2 mb-2 text-white">{producto.price}</p>
            <div className="m-auto align-center">
                <Link to ={`/productos/${producto.id}`}><button className="btn btn-primar">Comprar</button></Link>
                <p>Apurate! Quedan {producto.qty}</p>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail