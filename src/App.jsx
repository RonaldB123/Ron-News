import './App.css'
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { AllArticles } from './components/pages/AllArticles'
import { Home } from './components/pages/Home';
import { SingleArticle } from './components/pages/SingleArticle';
import { Topics } from './components/pages/Topics';
import { ArticlesTopics } from './components/pages/ArticlesTopics';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/articles" element={<AllArticles/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      <Route path="/topics" element={<Topics/>}/>
      <Route path="/articles/topics/:topic" element={<ArticlesTopics/>}/>
    </Routes>
  
    </>
  )
}

export default App
