import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import Nosotros from './container/Nosotros';
import Contacto from './container/Contacto';


function App() {
  return (
    <div class="shadow-md w-4/5 m-auto">
      <p class='shadow-lg p-20'>
        <h1 class="text-9xl font-bold text-gray-300 hover:bg-neutral-content rounded-box p-5">kuzin</h1>
      </p>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/categorias/:itemCat' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
     );
}

export default App;
