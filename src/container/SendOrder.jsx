import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import OrderCard from "../components/OrderCard";
import { SaveOrder } from "../context/cartContext";
import { SaveBuyer } from "../context/userContext";

const SendOrder = () => {

    const { cart } = SaveOrder()
    const { user } = SaveBuyer()
    const [orderID,setorderID] = useState()

    useEffect( () => {

        const sendOrderHandler = () => {

            let usuario = {
                name:user.name,
                surname:user.surname,
                phone:user.phone,
                email:user.email,          
            }
            let itemes = {
                items:cart,
                total:user.total
            }
            let order = {
                buyer:usuario,
                items:itemes
            }
            saveToFirestore(order)

        }

        const saveToFirestore = (order) => { 
            const db = getFirestore()
            const orderCollection = collection(db, 'orders')
            addDoc(orderCollection,order).then( (response) => {
                setorderID(response.id)
            })
            .catch(function(error) {
                console.error("Error: ", error)
            })
        }

        if( cart.length > 0 ){
            sendOrderHandler()
        }

    },[cart])


    return (
        <div className="text-center w-auto bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
            <div className="flex w-auto" style={{ alignItems: "center", flexDirection: "column"}}>
                <div className="flex basis-4/5 font-bold text-5xl mt-2 mb-2">
                    RESUMEN DE COMPRA
                </div>
            </div>
            <div className="w-auto" >
                <div className="flex" style={{ alignItems: "center", flexDirection: "column", color: "white"}}>
                <div className="flex text-xl mt-6"><span className="font-bold text-2xl">{user.name} {user.surname}</span>, tu pedido es el siguiente:</div>
                <div className="flex w-auto h-auto flex-wrap mt-6 justify-center border-2 border-neutral-content p-20">
                    {cart.map( i => <OrderCard key={i.id} data={i}/>)}
                </div>
                <div className="text-xl font-bold mt-4">El total de tu pedido es de: <span className="text-2xl font-bold" style={{ color: 'white' }}>${user.total}</span> </div>
                <div className="text-m font-bold mt-2"> Tu compra será confirmada pronto. El N° de orden de tu pedido es: <span className="text-xl font-bold" style={{ color: 'orange' }}>{orderID}</span></div>
                <div>
                    <Link to={'/'}>
                        <button className="btn btn-outline-primary btn-lg mt-10">VOLVER AL INICIO</button>
                    </Link>
                </div>
                </div>              
            </div>
        </div>

    )
}

export default SendOrder