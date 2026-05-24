import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Faq from './pages/Faq'
import './index.css'

function Header() {
  return (
    <header className="app-header p-6 flex items-center justify-between">
      <div className="company-name">UBS P.J.A</div>
    </header>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Faq" element={<Faq />}></Route>
      </Routes>
    </>
  )
}