import './App.css'
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar'
import { AllArticles } from './components/pages/AllArticles'
import { Home } from './components/pages/Home';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/articles" element={<AllArticles/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  
    </>
  )
}

export default App
