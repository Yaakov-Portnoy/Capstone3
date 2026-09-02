import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Workshops from './pages/Workshops'
import Videos from './pages/Videos'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/workshops">Workshops</Link> | <Link to="/videos">Videos</Link> | <Link to="/get-involved">Get Involved</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
