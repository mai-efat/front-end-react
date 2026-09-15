import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeProvider } from './Context/ThemeContext'; 
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Challenging from './pages/Challenging/Challenging';
import Pricing from './pages/Pricing/Pricing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CookieBar from './components/CookieBar/CookieBar';


function App() {
  return (
      <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/challenging" element={<Challenging />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
      <CookieBar />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
