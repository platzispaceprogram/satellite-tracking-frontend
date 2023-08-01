import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ResponsiveAppBar from './components/header/Navbar'
import Contact from '../src/pages/contact/Contact'
import Map from './pages/map/Map'
import Grounds from './pages/grounds/Grounds'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Tle from './pages/tle/Tle'

function App() {

  return (
    <div>
       <ResponsiveAppBar />
      <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/login' element={< Login/>}/>
          <Route path='/map' element={< Map/>}/>
          <Route path='/grounds' element={< Grounds/>}/>
          <Route path='/tle' element={< Tle/>}/>
          <Route path='/project' element={< Project/>}/>
          <Route path='/contact' element={< Contact/>}/>
      </Routes>   
    </div>
  )
}

export default App
