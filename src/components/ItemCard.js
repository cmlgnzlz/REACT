const ItemCard = ( {data} ) => {
    return(
        <div className="card w-96 bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
            <img src={data.img} alt={data.name}/>
            <div>
                <h2 className="font-bold text-xl mt-2 mb-2 ">{data.name}</h2>
                <p className="font-bold text-xl mt-2 mb-2 text-white">{data.price}</p>
                <div className="m-auto">
                    <button className="btn btn-primar">Comprar</button>
                    <h4>Apurate! Quedan {data.qty}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemCard

