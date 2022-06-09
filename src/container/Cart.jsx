import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartCard from "../components/CartCard"
import { cartContext } from "../context/cartContext"
import { userContext } from "../context/userContext"

const Cart = () => {
    
    const {cart, clearCart} = useContext(cartContext)
    const {user, addBuyer} = useContext(userContext)
    console.log(cart);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
  
    function onNameChange(evt) {
      setName(evt.target.value);
    }
    function onSurnameChange(evt) {
      setSurname(evt.target.value);
    }
    function onPhoneChange(evt) {
      setPhone(evt.target.value);
    }
    function onEmailChange(evt) {
      setEmail(evt.target.value);
    }
    
    let totales = cart.map(i => i.total)
    let sumaTotales = totales.reduce((a,b) => a+b, 0)

    useEffect( ()=>{
                
        function onSubmit() {
            var buyer = {
                name:name,
                surname:surname,
                phone:phone,
                email:email,
                total:sumaTotales
            }
            addBuyer(buyer)
        }
    }, [user])

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
                        <div className="text-xl font-bold">El total de tu pedido es de: <span className="text-2xl font-bold" style={{ color: 'white' }}>${sumaTotales}</span> </div>
                        <div className="text-xl font-bold" >Ingresa tus datos para continuar la compra:</div>
                        <form style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <div style={{ display: "flex", marginBottom: 8 , marginTop:8}}>
                                <label style={{ marginRight: 10 }}>Nombre</label>
                                <input style={{ color: 'black' }} type="text" onChange={evt => onNameChange(evt)} />
                            </div>
                            <div style={{ display: "flex", marginBottom: 8 }}>
                                <label style={{ marginRight: 10 }}>Apellido</label>
                                <input style={{ color: 'black' }} type="text" onChange={evt => onSurnameChange(evt)} />
                            </div>
                            <div style={{ display: "flex", marginBottom: 8 }}>
                                <label style={{ marginRight: 10 }}>Telefono</label>
                                <input style={{ color: 'black' }} type="number" onChange={evt => onPhoneChange(evt)} />
                            </div>
                            <div style={{ display: "flex", marginBottom: 8 }}>
                                <label style={{ marginRight: 10 }}>Email</label>
                                <input id="email" style={{ color: 'black' }} placeholder="example@mail.com" type="email" onChange={evt => onEmailChange(evt)}/>
                            </div>
                            <button disabled={!(name !== "" && surname !== "" && phone !== "" && email !== "")} className="btn btn-outline-primary btn-lg mt-10" onClick={() => onSubmit(evt)}><Link to={"/order"}>Terminar compra</Link></button>
                        </form>
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

