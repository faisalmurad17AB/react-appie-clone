import Blog from './components/Blogs/Blog';
import FAQ from './components/FAQs/FAQ';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Price from './components/Pricing/Price';
import Project from './components/Projects/Project';
import Services from './components/Services/Services';
import Slider from './components/Slider/Slider';
import Team from './components/Team/Team';
import Traffic from './components/Traffic/Traffic';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Features />
      <Traffic />
      <Slider />
      <Team />
      <Price />
      <FAQ />
      <Blog />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
