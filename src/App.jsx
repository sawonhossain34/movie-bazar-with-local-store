import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const [count, setCount] = useState(0)

  const handleWatchTime = (time) => {
    console.log(time);
  }

  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>
      
      
      
    </div>
  )
}

export default App
