import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'

function App() {
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth'

  return (
    <div className="app-root">
      {!isAuthPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      {!isAuthPage && (
        <footer className="footer">
          <p>© {new Date().getFullYear()} Localize — Explore Morocco your way.</p>
        </footer>
      )}
    </div>
  )
}

export default App
