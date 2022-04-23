import logo from './logo.svg';
import './App.css';
import ItemListContainer from './container/ItemListContainer';
import Navbar from './components/navbar';

function App() {
  return (
    <div class="shadow-md w-4/5 m-auto">
      <p class='shadow-lg p-20'>
        <h1 class="text-9xl font-bold text-gray-300 hover:bg-neutral-content rounded-box p-5">kuzin</h1>
      </p>
      <Navbar/>
      <ItemListContainer/>
    </div>
     );
}

export default App;
