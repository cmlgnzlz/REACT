import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import OrderCard from "../components/OrderCard";
import { SaveOrder } from "../context/cartContext";
import { SaveBuyer } from "../context/userContext";

const SendOrder = () => {

    const { cart } = SaveOrder()
    const { user } = SaveBuyer()
    const orderID = ""

    console.log(cart);
    console.log(user);
    useEffect( () => {
        if( cart.length > 0 ){
            sendOrderHandler()
        }
    },[])

    const sendOrderHandler = () => {

        let usuario = {
            name:user.name,
            surname:user.surname,
            phone:user.phone,
            email:user.email,          
        }
        console.log(usuario)
        let itemes = {
            items:cart,
            total:user.total
        }
        console.log(itemes)
        let order = {
            buyer:usuario,
            items:itemes
        }
        console.log(order)
        saveToFirestore(order)

    }

    const saveToFirestore = (order) => { 
        const db = getFirestore()
        console.log(order);
        console.log(db);
        const orderCollection = collection(db, 'orders')
        console.log(orderCollection);
        addDoc(orderCollection,order).then( (response) => {
            console.log(response.id)
            const orderID = response.id
            console.log(orderID)
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        })
    }
    


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
                <div className="text-m font-bold mt-2"> Tu compra será confirmada pronto. El N° de orden de tu pedido es: {orderID}</div>
                <button className="btn btn-outline-primary btn-lg mt-10"></button>
                </div>              
            </div>
        </div>

    )
}

export default SendOrder