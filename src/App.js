import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Route } from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    
      <Route path='/checkout' element={<Checkout />} />

{/* Default route should be at the bottom */}
      <Route path='/'  element={<Home/>} /> 

    </div>
    </BrowserRouter>
  );
}

export default App;
