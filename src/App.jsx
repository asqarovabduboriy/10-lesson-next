import './App.css'
import Navbar from './components/navbar/Navbar'
import{Routes,Route} from 'react-router-dom'
import Home from './page/home/Home'
import Footer from './components/footer/Footer'
import Singleroute from './page/single/Singleroute'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/product/:id'} element={<Singleroute/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
