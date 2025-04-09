import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Services from './components/Services/services';
import MyWork from './components/MyWork/mywork';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
