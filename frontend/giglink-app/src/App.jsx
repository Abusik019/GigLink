import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Down from '../src/components/Down'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={< Down/>}/>

    </Routes>
  )
}

export default App
