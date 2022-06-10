import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import Nosotros from './container/Nosotros';
import Contacto from './container/Contacto';
import CartProvider from './context/cartContext';
import UserProvider from './context/userContext';
import Cart from './container/Cart';
<<<<<<< HEAD
=======
import SendOrder from './container/SendOrder';
>>>>>>> firebase

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <div className="shadow-md w-4/5 m-auto">
          <h1 className='shadow-lg p-5'>
            <p className="text-8xl font-bold text-gray-300 hover:bg-neutral-content rounded-box p-5">kuzin</p>
          </h1>
            <BrowserRouter> 
              <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/productos' element={<ItemListContainer/>}/>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/order' element={<SendOrder/>}/>
                <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/categorias/:itemCat' element={<ItemListContainer/>}/>
              </Routes>
            </BrowserRouter>
        </div>
      </UserProvider>
    </CartProvider>
  );
}

export default App;