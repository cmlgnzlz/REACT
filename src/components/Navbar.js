import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/nosotros'}>Nosotros</Link></li>
                        <li class="dropdown"><Link to={'/productos'}><span>Productos</span></Link>
                                <ul class="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><Link to={'/categorias/pol'}>Polarizados</Link></li>
                                <li><Link to={'/categorias/col'}>Colores</Link></li></ul>
                        </li>                         
                        <li><Link to={'/contacto'}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="btn btn-ghost normal-case text-3xl text-gray-500" href><Link to={'/'}>kuzin</Link></a>
            </div>
            <div class="navbar-end">
                <CartWidget/>
            </div>
        </div>
    )
}
export default Navbar