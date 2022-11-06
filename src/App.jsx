import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pokemon404 from './components/pokedexID/Pokemon404'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Home from './Pages/Home'
import Pokedex from './Pages/Pokedex'
import PokedexByID from './Pages/PokedexByID'
import ProtectedRoutes from './Pages/ProtectedRoutes'

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/' element ={<ProtectedRoutes/>}>
          <Route path='/pokedex' element ={<Pokedex/>}/>
          <Route path='/pokedex/:id' element ={<PokedexByID/>}/>
          <Route path='/error' element ={<Pokemon404/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
