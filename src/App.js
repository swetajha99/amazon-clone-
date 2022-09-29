import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>

      <Route path='/checkout' element={<Checkout />} />

{/* Default route should be at the bottom */}
      <Route path='/'  element={<Home/>} /> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
