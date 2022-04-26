import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
    </>
  );
}

export default App;
