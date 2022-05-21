import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer';
import Nosotros from './container/Nosotros';
import Contacto from './container/Contacto';
import CartProvider from './context/cartContext';
import Cart from './container/Cart';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFT3AacKNr7zrZToQcQuxFbBobN8YOyaI",
  authDomain: "kuzin-9f2af.firebaseapp.com",
  projectId: "kuzin-9f2af",
  storageBucket: "kuzin-9f2af.appspot.com",
  messagingSenderId: "419536581428",
  appId: "1:419536581428:web:5c57fc8c7d080d0d9bab61",
  measurementId: "G-G04MV8TETP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <CartProvider>
      <div class="shadow-md w-4/5 m-auto">
        <p class='shadow-lg p-5'>
          <h1 class="text-8xl font-bold text-gray-300 hover:bg-neutral-content rounded-box p-5">kuzin</h1>
        </p>
          <BrowserRouter> 
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/productos/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/categorias/:itemCat' element={<ItemListContainer/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;