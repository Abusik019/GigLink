import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Down from '../src/components/Down'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default App
