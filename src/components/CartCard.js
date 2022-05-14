import { useContext } from "react";
import { cartContext } from '../context/cartContext';

const CartCard = ( {data} ) => {

    const {removeItem} = useContext(cartContext)

    return(
        <div className="card text-center w-auto h-auto bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
            <div>
                <div className="w-full rounded-b border-t-0 z-10">
                    <div className="shadow-xl w-64">
                        <div className="p-2 flex bg-grey border-b border-gray-100">
                            <div className="p-2 w-20"><img src={data.item.img} alt={data.item.name}/></div>
                            <div className="flex-auto text-md w-auto">
                                <div className="font-bold">{data.item.name}</div>
                                <div className="text-black-400">Cantidad: {data.count}</div>
                            </div>
                            <div>
                                <div><button onClick={() => removeItem(data.item)} className="btn btn-sm">X</button></div>
                                <div className="flex flex-col w-18 font-medium items-end">{data.item.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard