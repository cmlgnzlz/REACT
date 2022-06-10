import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/nosotros'}>Nosotros</Link></li>
                        <li className="dropdown"><Link to={'/productos'}><span>Productos</span></Link>
                                <ul className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><Link to={'/categorias/pol'}>Polarizados</Link></li>
                                <li><Link to={'/categorias/col'}>Colores</Link></li></ul>
                        </li>                         
                        <li><Link to={'/contacto'}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <p className="btn btn-ghost normal-case text-3xl text-gray-500"><Link to={'/'}>kuzin</Link></p>
            </div>
            <div className="navbar-end">
                <CartWidget/>
            </div>
        </div>
    )
}
export default Navbar