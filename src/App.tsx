import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './components/MainLayout'
import Messaging from './pages/Messaging'
import Mail from './pages/Messaging/Mail'
import Licensing from './pages/Licensing'
import Contact from './pages/Contact'
import Messaging2 from './pages/Messaging2'

import Home from './pages/Home'
import Home2 from './pages/Home2'
import Re from './pages/Re'
import Re2 from './pages/Re2'

function App() {
    return (
        <>
            <ScrollToTop />
            <MainLayout>
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home2" element={<Home2 />} />
                        <Route path="/re" element={<Re />} />
                        <Route path="/re2" element={<Re2 />} />
                        <Route path="/messaging" element={<Messaging />} />
                        <Route path="/mail" element={<Mail />} />
                        <Route path="/licensing" element={<Licensing />} />
                        <Route path="/messaging2" element={<Messaging2 />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </MainLayout>
        </>
    )
}

export default App
