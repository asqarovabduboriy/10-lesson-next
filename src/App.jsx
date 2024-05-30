import './App.css'
import Navbar from './components/navbar/Navbar'
import{Routes,Route} from 'react-router-dom'
import Home from './page/home/Home'
import Footer from './components/footer/Footer'
import Singleroute from './page/single/Singleroute'
import Like from './page/Like/Like'
import Cart from './page/cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/product/:id'} element={<Singleroute/>} />
        <Route path={'/wishlist'}  element={<Like/>}/>
        <Route path={'/cart'}  element={<Cart/>}/>
      </Routes>

      <Footer/>

      <ToastContainer />
    </>
  )
}

export default App
