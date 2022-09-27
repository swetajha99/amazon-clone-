import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
 

    <Routes>

      <Route path='/checkout' >
      <Header/>
      <Checkout />
      </Route>

{/* Default route should be at the bottom */}
      <Route path='/'> 
      <Header/>
        <Home/>
      </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
