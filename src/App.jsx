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
import Contact from './page/contact/Contact'
import Login  from './page/login/Login'
import  Aouth from './page/aouth/Aouth'
import Admin from './page/Admin/Admin'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/product/:id'} element={<Singleroute/>} />
        <Route path={'/wishlist'}  element={<Like/>}/>
        <Route path={'/cart'}  element={<Cart/>}/>
        <Route path={'/contact'}  element={<Contact/>}/>
        <Route path={'*'}  element={<h1>404</h1>}/>
        <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Aouth/>}>
            <Route path='/admin' element={<Admin/>  }/>
          </Route>
      </Routes>

      <Footer/>

      <ToastContainer />
    </>
  )
}

export default App
