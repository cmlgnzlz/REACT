import { Link } from "react-router-dom"

const ItemCard = ( {data} ) => {
    return(
        <div className="card text-center w-96 bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
            <img src={data.img} alt={data.name}/>
            <div>
                <p className="font-bold text-3xl mt-2 mb-2">{data.name}</p>
                <p className="font-bold text-xl mt-2 mb-2 text-white">{data.price}</p>
                <div className="m-auto justify-center">
                    <Link to ={`/productos/${data.id}`}><button className="btn btn-primar">Más detalles</button></Link>
                    <p>Apurate! Quedan {data.qty}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard


